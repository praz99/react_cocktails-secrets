import React, { useEffect } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Drink from '../components/Drink';
import CategoryFilter from '../components/CategoryFilter';
import { API_MAIN, API_SEARCH } from '../constants/api';
import {
  dataFetchStart, dataFetchSuccess, dataFetchFailure, changeCategoryAction,
} from '../actions/index';
import '../styles/DrinkList.css';

const DrinkList = ({
  fetchStart,
  fetchSuccess,
  fetchFailure,
  drinks,
  isLoading,
  isError,
  search,
  category,
  changeCategory,
}) => {
  const handleChangeCategory = event => changeCategory(event.target.value);
  const drinkFiltered = category === 'All' ? drinks : drinks.filter(drink => drink.strCategory === category);
  useEffect(() => {
    const fetchData = async () => {
      fetchStart();
      try {
        const result = await axios(
          `${API_MAIN}${API_SEARCH}${search}`,
        );
        fetchSuccess(result.data);
      } catch (error) {
        fetchFailure();
      }
    };

    fetchData();
  }, [search]);

  return (
    <>
      {isError && <div>Something went wrong ...</div>}
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          <CategoryFilter handleFilterChange={handleChangeCategory} />
          {drinkFiltered && drinkFiltered.length ? (
            <div className="drink-list">
              {drinkFiltered.map(drink => (<Drink key={drink.idDrink} drink={drink} />))}
            </div>
          ) : (
            <div>No drinks available for this category...</div>
          )}
        </>
      )}
    </>
  );
};

DrinkList.propTypes = {
  fetchStart: PropTypes.func.isRequired,
  fetchSuccess: PropTypes.func.isRequired,
  fetchFailure: PropTypes.func.isRequired,
  drinks: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  isError: PropTypes.bool,
  isLoading: PropTypes.bool,
  search: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  changeCategory: PropTypes.func.isRequired,

};

DrinkList.defaultProps = {
  drinks: [],
  isError: false,
  isLoading: false,
};

const mapStateToProps = state => ({
  drinks: state.data.drinks,
  isLoading: state.data.isLoading,
  isError: state.data.isError,
  category: state.categories,
});

const mapDispatchToProps = dispatch => ({
  fetchStart: () => dispatch(dataFetchStart()),
  fetchSuccess: data => dispatch(dataFetchSuccess(data)),
  fetchFailure: () => dispatch(dataFetchFailure()),
  changeCategory: category => dispatch(changeCategoryAction(category)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DrinkList);

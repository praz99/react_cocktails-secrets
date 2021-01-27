import React, { useEffect } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Drink from '../components/Drink';
import { API_MAIN, API_SEARCH } from '../constants/api';
import { dataFetchStart, dataFetchSuccess, dataFetchFailure } from '../actions/index';
import '../styles/DrinkList.css';

const DrinkList = ({
  fetchStart, fetchSuccess, fetchFailure, drinks, isLoading, isError, search,
}) => {
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
        <div className="drink-list">
          {drinks.map(drink => (<Drink key={drink.idDrink} drink={drink} />))}
        </div>
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
});

const mapDispatchToProps = dispatch => ({
  fetchStart: () => dispatch(dataFetchStart()),
  fetchSuccess: data => dispatch(dataFetchSuccess(data)),
  fetchFailure: () => dispatch(dataFetchFailure()),
});

export default connect(mapStateToProps, mapDispatchToProps)(DrinkList);

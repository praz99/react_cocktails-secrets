import React, { useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { detailsFetchStart, detailsFetchSuccess, detailsFetchFailure } from '../actions/index';
import Navbar from '../layouts/Navbar';
import Footer from '../layouts/Footer';
import { API_MAIN, API_DETAIL } from '../constants/api';
import '../styles/DrinkDetail.css';

const DrinkDetail = ({
  fetchStart, fetchSuccess, fetchFailure, drinks, isLoading, isError,
}) => {
  const { id } = useParams();

  useEffect(() => {
    const fetchDetail = async () => {
      fetchStart();
      try {
        const result = await axios(
          `${API_MAIN}${API_DETAIL}${id}`,
        );
        fetchSuccess(result.data);
      } catch (error) {
        fetchFailure();
      }
    };

    fetchDetail();
  }, []);

  const ingredients = [];
  const quantity = [];

  if (drinks && drinks.length) {
    const drink = drinks[0];
    Object.entries(drink).forEach(([key, value]) => {
      if (key.includes('strIngredient') && value) {
        const ingredient = value.split('');
        ingredient[0] = ingredient[0].toUpperCase();
        ingredients.push(ingredient.join(''));
      } else if (key.includes('strMeasure') && value) {
        quantity.push(value);
      }
    });
  }

  return (
    <>
      <Navbar />
      {isError && <div>Someting went wrong. Please try again...</div>}
      {isLoading ? (
        <div>Loading details...</div>
      ) : (
        drinks.map(drink => (
          <div className="details-container" key={drink.idDrink}>
            <div className="details-image-container">
              <img className="details-image" src={drink.strDrinkThumb} alt={drink.strDrink} />
            </div>
            <div className="details-description">
              <h1 className="drink-name detail-fields">{drink.strDrink}</h1>
              <p className="detail-fields">
                Category:
                {' '}
                {drink.strCategory}
              </p>
              <p className="detail-fields">
                Service Glass:
                {' '}
                {drink.strGlass}
              </p>
              <table className="details-table">
                <thead>
                  <tr>
                    <th aria-label="blank" className="small-col" />
                    <th className="last-col">Ingredients</th>
                    <th>Quantity</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    ingredients.map((ingredient, i) => (
                      <tr className="row" key={`${ingredient}-${i + 1}`}>
                        <td className="small-col">
                          {i + 1}
                          .
                        </td>
                        <td className="last-col">{ingredient}</td>
                        <td>{quantity[i]}</td>
                      </tr>
                    ))
                  }
                </tbody>
              </table>
              <div className="instructions">
                <h3>Preparation</h3>
                {drink.strInstructions}
              </div>
            </div>
          </div>
        ))
      )}
      <Footer />
    </>
  );
};

DrinkDetail.propTypes = {
  fetchStart: PropTypes.func.isRequired,
  fetchSuccess: PropTypes.func.isRequired,
  fetchFailure: PropTypes.func.isRequired,
  drinks: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  isError: PropTypes.bool,
  isLoading: PropTypes.bool,
};

DrinkDetail.defaultProps = {
  drinks: [],
  isError: false,
  isLoading: false,
};

const mapStateToProps = state => ({
  drinks: state.details.drinks,
  isLoading: state.details.isLoading,
  isError: state.details.isError,
});

const mapDispatchToProps = dispatch => ({
  fetchStart: () => dispatch(detailsFetchStart()),
  fetchSuccess: details => dispatch(detailsFetchSuccess(details)),
  fetchFailure: () => dispatch(detailsFetchFailure()),
});

export default connect(mapStateToProps, mapDispatchToProps)(DrinkDetail);

import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Drink.css';

const Drink = ({ drink }) => (
  <div className="drink-container" style={{ backgroundImage: `url(${drink.strDrinkThumb})` }}>
    <a href={`/details/${drink.idDrink}`} className="drink-button" data-testid="details-link">{drink.strDrink}</a>
  </div>
);

Drink.propTypes = {
  strDrinkThumb: PropTypes.string,
  srtDrink: PropTypes.string,
}.isRequired;

export default Drink;

import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Drink.css';

const Drink = ({ drink }) => (
  <div className="drink-container" style={{ backgroundImage: `url(${drink.strDrinkThumb})` }}>
    <button className="drink-button" type="button">{drink.strDrink}</button>
  </div>
);

Drink.propTypes = {
  strDrinkThumb: PropTypes.string,
  srtDrink: PropTypes.string,
}.isRequired;

export default Drink;

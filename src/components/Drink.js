import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Drink.css';

const Drink = ({ drink }) => (
  <div className="drink-container" style={{ backgroundImage: `url(${drink.strDrinkThumb})` }}>
    <div className="drink-bottom">
      <div className="drink-name">{drink.strDrink}</div>
      <button type="button">See Details</button>
    </div>
  </div>
);

Drink.propTypes = {
  strDrinkThumb: PropTypes.string,
  srtDrink: PropTypes.string,
}.isRequired;

export default Drink;

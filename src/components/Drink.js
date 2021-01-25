import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../styles/Drink.css';

const Drink = ({ drink }) => (
  <div className="drink-container" style={{ backgroundImage: `url(${drink.strDrinkThumb})` }}>
    <Link to="/details" className="drink-button">{drink.strDrink}</Link>
  </div>
);

Drink.propTypes = {
  strDrinkThumb: PropTypes.string,
  srtDrink: PropTypes.string,
}.isRequired;

export default Drink;

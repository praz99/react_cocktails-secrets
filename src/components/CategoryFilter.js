import React from 'react';
import PropTypes from 'prop-types';
import selectCategories from '../constants/categories';
import '../styles/CategoryFilter.css';

const CategoryFilter = ({ handleFilterChange }) => (
  <select onChange={handleFilterChange} name="category" className="category-select">
    <option value="All">All</option>
    {selectCategories}
  </select>
);

CategoryFilter.propTypes = {
  handleFilterChange: PropTypes.func.isRequired,
};

export default CategoryFilter;

import React from 'react';
import PropTypes from 'prop-types';
import selectCategories from '../constants/categories';

const CategoryFilter = ({ handleFilterChange }) => (
  <select onChange={handleFilterChange} name="category">
    <option value="All">All</option>
    {selectCategories}
  </select>
);

CategoryFilter.propTypes = {
  handleFilterChange: PropTypes.func.isRequired,
};

export default CategoryFilter;

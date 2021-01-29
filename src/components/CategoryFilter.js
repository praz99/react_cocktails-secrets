import React from 'react';
import PropTypes from 'prop-types';
import selectCategories from '../constants/categories';
import '../styles/CategoryFilter.css';

const CategoryFilter = ({ handleFilterChange }) => (
  <div className="category-select-container">
    <span className="category-span">Find by Category</span>
    <select onChange={handleFilterChange} name="category" className="category-select">
      <option value="All">All</option>
      {selectCategories}
    </select>
  </div>
);

CategoryFilter.propTypes = {
  handleFilterChange: PropTypes.func.isRequired,
};

export default CategoryFilter;

import React from 'react';
import styled from 'styled-components';
import selectCategories from '../constants/categories';

type CategoryFilterProps = {
  handleFilterChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

const Container = styled.div`
  position: absolute;
  top: 2em;
  right: 2em;
`;

const Label = styled.span`
  font-size: 12px;
  padding-right: 10px;
`;

const Select = styled.select`
  padding: 5px;
  background-color: lightblue;
  &:focus {
    border: none;
    outline: none;
  }
`;

const CategoryFilter = ({ handleFilterChange }: CategoryFilterProps) => (
  <Container>
    <Label>Find by Category</Label>
    <Select onChange={handleFilterChange} name="category">
      <option value="All">All</option>
      {selectCategories}
    </Select>
  </Container>
);

export default CategoryFilter;

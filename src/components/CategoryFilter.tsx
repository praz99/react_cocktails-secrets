import React from "react";
import styled from "styled-components";
import selectCategories from "../constants/categories";

type CategoryFilterProps = {
  handleFilterChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

const Container = styled.div`
  position: relative;
  margin: 1rem 0;
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

const Label = styled.span`
  font-size: 0.85rem;
  color: var(--muted);
`;

const Select = styled.select`
  padding: 8px 10px;
  background: rgba(255, 255, 255, 0.03);
  color: var(--text);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 8px;
  font-weight: 600;
  &:focus {
    outline: none;
    box-shadow: 0 4px 18px rgba(15, 185, 168, 0.08);
    border-color: var(--accent);
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

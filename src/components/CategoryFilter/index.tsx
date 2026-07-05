import React from "react";
import { CATEGORIES } from "../../constants/categories";
import { Container, Label, Select } from "./styles";

type CategoryFilterProps = {
  handleFilterChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

const CategoryFilter = ({ handleFilterChange }: CategoryFilterProps) => (
  <Container>
    <Label htmlFor="category-select">Filter by Category</Label>
    <Select
      id="category-select"
      onChange={handleFilterChange}
      name="category"
      defaultValue="All"
    >
      <option value="All">All Drinks</option>
      {CATEGORIES.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </Select>
  </Container>
);

export default CategoryFilter;

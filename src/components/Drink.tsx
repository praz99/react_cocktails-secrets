import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import type { Drink as DrinkType } from '../types';

type ContainerProps = {
  bg: string;
};

type DrinkProps = {
  drink: DrinkType;
};

const Container = styled.div<ContainerProps>`
  height: 50vh;
  background-size: cover;
  display: flex;
  align-items: flex-end;
  border: 3px solid red;
  border-radius: 8px;
  background-image: url(${props => props.bg});
  background-position: center;
`;

const Button = styled(Link)`
  background: #00000074;
  color: white;
  font-weight: 700;
  border: 2px solid red;
  text-align: center;
  border-radius: 8px;
  padding: 5px;
  margin: 10px;
  width: 100%;
  text-decoration: none;
  &:hover {
    background: #000000ce;
  }
`;

const Drink = ({ drink }: DrinkProps) => (
  <Container bg={drink.strDrinkThumb}>
    <Button to={`/details/${drink.idDrink}`} data-testid="details-link">
      {drink.strDrink}
    </Button>
  </Container>
);

export default Drink;

import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import type { Drink as DrinkType } from "../types";

type ContainerProps = {
  bg: string;
  large?: boolean;
};

type DrinkProps = {
  drink: DrinkType;
  large?: boolean;
};

const Container = styled.div<ContainerProps>`
  width: 100%;
  aspect-ratio: 1 / 1;
  background-size: cover;
  display: flex;
  align-items: flex-end;
  border-radius: 10px;
  background-image: url(${(props) => props.bg});
  background-position: center;
  box-shadow: 0 6px 18px rgba(2, 6, 23, 0.6);
  overflow: hidden;
`;

const Button = styled(Link)`
  background: linear-gradient(
    90deg,
    rgba(11, 18, 32, 0.6),
    rgba(11, 18, 32, 0.4)
  );
  color: var(--text);
  font-weight: 700;
  text-align: center;
  border-radius: 6px;
  padding: 8px 12px;
  margin: 12px;
  width: calc(100% - 24px);
  text-decoration: none;
  backdrop-filter: blur(4px);
  transition:
    transform 150ms ease,
    box-shadow 150ms ease;
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 18px rgba(11, 18, 32, 0.5);
  }
`;

const Drink = ({ drink, large = false }: DrinkProps) => (
  <Container bg={drink.strDrinkThumb} large={large}>
    <Button to={`/details/${drink.idDrink}`} data-testid="details-link">
      {drink.strDrink}
    </Button>
  </Container>
);

export default Drink;

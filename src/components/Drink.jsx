import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  height: 50vh;
  background-size: cover;
  display: flex;
  align-items: flex-end;
  border: 3px solid red;
  border-radius: 8px;
  background-image: url(${(props) => props.bg});
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

const Drink = ({ drink }) => (
  <Container bg={drink.strDrinkThumb}>
    <Button to={`/details/${drink.idDrink}`} data-testid="details-link">
      {drink.strDrink}
    </Button>
  </Container>
);

Drink.propTypes = {
  strDrinkThumb: PropTypes.string,
  srtDrink: PropTypes.string,
}.isRequired;

export default Drink;

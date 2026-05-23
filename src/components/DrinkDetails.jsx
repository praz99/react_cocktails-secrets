import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import {
  detailsFetchStart,
  detailsFetchSuccess,
  detailsFetchFailure,
} from "../actions/index";
import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer";
import { API_MAIN, API_DETAIL } from "../constants/api";
import styled from "styled-components";

const DrinkDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const drinks = useSelector((state) => state.details.drinks);
  const isLoading = useSelector((state) => state.details.isLoading);
  const isError = useSelector((state) => state.details.isError);

  useEffect(() => {
    const fetchDetail = async () => {
      dispatch(detailsFetchStart());
      try {
        const result = await axios(`${API_MAIN}${API_DETAIL}${id}`);
        dispatch(detailsFetchSuccess(result.data));
      } catch (error) {
        dispatch(detailsFetchFailure());
      }
    };

    fetchDetail();
  }, [id, dispatch]);

  const ingredients = [];
  const quantity = [];

  if (drinks && drinks.length) {
    const drink = drinks[0];
    Object.entries(drink).forEach(([key, value]) => {
      if (key.includes("strIngredient") && value) {
        const ingredient = value.split("");
        ingredient[0] = ingredient[0].toUpperCase();
        ingredients.push(ingredient.join(""));
      } else if (key.includes("strMeasure") && value) {
        quantity.push(value);
      }
    });
  }

  return (
    <>
      <Navbar />
      {isError && <div>Someting went wrong. Please try again...</div>}
      {isLoading ? (
        <div>Loading details...</div>
      ) : (
        drinks.map((drink) => (
          <DetailsContainer key={drink.idDrink}>
            <ImageContainer>
              <Image src={drink.strDrinkThumb} alt={drink.strDrink} />
            </ImageContainer>
            <Description>
              <h1 className="drink-name detail-fields">{drink.strDrink}</h1>
              <p>
                <strong>Category:</strong> {drink.strCategory}
              </p>
              <p>
                <strong>Service Glass:</strong> {drink.strGlass}
              </p>
              <Table className="details-table">
                <thead>
                  <tr>
                    <th aria-label="blank" className="small-col" />
                    <th className="last-col">Ingredients</th>
                    <th>Quantity</th>
                  </tr>
                </thead>
                <tbody>
                  {ingredients.map((ingredient, i) => (
                    <tr className="row" key={`${ingredient}-${i + 1}`}>
                      <td className="small-col">{i + 1}.</td>
                      <td className="last-col">{ingredient}</td>
                      <td>{quantity[i]}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
              <Instructions>
                <h3>Preparation</h3>
                {drink.strInstructions}
              </Instructions>
            </Description>
          </DetailsContainer>
        ))
      )}
      <Footer />
    </>
  );
};

const DetailsContainer = styled.div`
  display: flex;
  justify-content: center;
  background-color: #bb7b3b;
  padding: 10px 0;
  height: calc(100vh - 200px);
`;

const ImageContainer = styled.div`
  width: 45%;
  margin-right: 10px;
  object-fit: contain;
`;

const Image = styled.img`
  border-radius: 8px;
  width: 75%;
`;

const Description = styled.div`
  border: 3px solid red;
  border-radius: 8px;
  background-color: #dad557d9;
  width: 45%;
  margin-left: 10px;
  padding: 20px;
  overflow: auto;
`;

const Table = styled.table`
  width: 100%;
  td,
  th {
    background-color: #bb7b3b9a;
    padding: 5px;
  }
  .small-col {
    width: 5%;
  }
  .last-col {
    width: 50%;
  }
`;

const Instructions = styled.div`
  overflow: auto;
`;

DrinkDetail.propTypes = {};

DrinkDetail.defaultProps = {};

export default DrinkDetail;

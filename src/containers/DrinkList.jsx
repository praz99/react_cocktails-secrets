import React, { useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import Drink from "../components/Drink";
import CategoryFilter from "../components/CategoryFilter";
import { API_MAIN, API_SEARCH } from "../constants/api";
import {
  dataFetchStart,
  dataFetchSuccess,
  dataFetchFailure,
  changeCategoryAction,
} from "../actions/index";
import styled from "styled-components";

const DrinkList = ({ search }) => {
  const dispatch = useDispatch();
  const drinks = useSelector((state) => state.data.drinks);
  const isLoading = useSelector((state) => state.data.isLoading);
  const isError = useSelector((state) => state.data.isError);
  const category = useSelector((state) => state.categories);

  const handleChangeCategory = (event) =>
    dispatch(changeCategoryAction(event.target.value));

  let drinkFiltered;

  if (drinks === null) {
    drinkFiltered = null;
  } else if (category === "All") {
    drinkFiltered = drinks;
  } else {
    drinkFiltered = drinks.filter((drink) => drink.strCategory === category);
  }

  useEffect(() => {
    const fetchData = async () => {
      dispatch(dataFetchStart());
      try {
        const result = await axios(`${API_MAIN}${API_SEARCH}${search}`);
        dispatch(dataFetchSuccess(result.data));
      } catch (error) {
        dispatch(dataFetchFailure());
      }
    };

    fetchData();
  }, [search, dispatch]);

  return (
    <>
      {isError && <div>Something went wrong. Please try again...</div>}
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          <CategoryFilter handleFilterChange={handleChangeCategory} />
          {drinkFiltered && drinkFiltered.length ? (
            <Grid>
              {drinkFiltered.map((drink) => (
                <Drink key={drink.idDrink} drink={drink} />
              ))}
            </Grid>
          ) : (
            <div>
              No drinks available for this category... Please try another one.
            </div>
          )}
        </>
      )}
    </>
  );
};

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1em;
`;

DrinkList.propTypes = {
  search: PropTypes.string.isRequired,
};

DrinkList.defaultProps = {};

export default DrinkList;

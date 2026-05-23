import React, { useEffect } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import Drink from '../components/Drink';
import CategoryFilter from '../components/CategoryFilter';
import { API_MAIN, API_SEARCH } from '../constants/api';
import {
  dataFetchStart,
  dataFetchSuccess,
  dataFetchFailure,
  changeCategoryAction,
} from '../actions/index';
import type { AppDispatch, RootState } from '../reducers';
import type { Category, Drink as DrinkType } from '../types';

type DrinkListProps = {
  search: string;
};

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1em;
`;

const DrinkList = ({ search }: DrinkListProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const drinks = useSelector((state: RootState) => state.data.drinks);
  const isLoading = useSelector((state: RootState) => state.data.isLoading);
  const isError = useSelector((state: RootState) => state.data.isError);
  const category = useSelector((state: RootState) => state.categories);

  const handleChangeCategory = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => dispatch(changeCategoryAction(event.target.value as Category));

  let drinkFiltered: DrinkType[];

  if (category === 'All') {
    drinkFiltered = drinks;
  } else {
    drinkFiltered = drinks.filter(drink => drink.strCategory === category);
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
              {drinkFiltered.map(drink => (
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

export default DrinkList;

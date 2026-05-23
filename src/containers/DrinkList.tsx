import React, { useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Drink from '../components/Drink';
import CategoryFilter from '../components/CategoryFilter';
import { API_MAIN, API_SEARCH } from '../constants/api';
import useCocktailStore from '../store/cocktailStore';
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
  const drinks = useCocktailStore(state => state.data.drinks);
  const isLoading = useCocktailStore(state => state.data.isLoading);
  const isError = useCocktailStore(state => state.data.isError);
  const category = useCocktailStore(state => state.categories);
  const changeCategory = useCocktailStore(state => state.changeCategory);
  const startDataFetch = useCocktailStore(state => state.startDataFetch);
  const completeDataFetch = useCocktailStore(state => state.completeDataFetch);
  const failDataFetch = useCocktailStore(state => state.failDataFetch);

  const handleChangeCategory = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => changeCategory(event.target.value as Category);

  let drinkFiltered: DrinkType[];

  if (category === 'All') {
    drinkFiltered = drinks;
  } else {
    drinkFiltered = drinks.filter(drink => drink.strCategory === category);
  }

  useEffect(() => {
    const fetchData = async () => {
      startDataFetch();
      try {
        const result = await axios(`${API_MAIN}${API_SEARCH}${search}`);
        completeDataFetch(result.data);
      } catch (error) {
        failDataFetch();
      }
    };

    fetchData();
  }, [search, startDataFetch, completeDataFetch, failDataFetch]);

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

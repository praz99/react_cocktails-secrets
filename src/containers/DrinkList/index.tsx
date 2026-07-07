import React, { useCallback, useEffect } from "react";
import axios from "axios";
import Drink from "../../components/Drink";
import CategoryFilter from "../../components/CategoryFilter";
import ErrorPage from "../../pages/ErrorPage";
import { API_MAIN, API_SEARCH } from "../../constants/api";
import useCocktailStore from "../../store/cocktailStore";
import type { Category, Drink as DrinkType } from "../../types";
import { Grid, Message } from "./styles";

type DrinkListProps = {
  search: string;
};

const DrinkList = ({ search }: DrinkListProps) => {
  const drinks = useCocktailStore((state) => state.data.drinks);
  const isLoading = useCocktailStore((state) => state.data.isLoading);
  const isError = useCocktailStore((state) => state.data.isError);
  const category = useCocktailStore((state) => state.categories);
  const changeCategory = useCocktailStore((state) => state.changeCategory);
  const startDataFetch = useCocktailStore((state) => state.startDataFetch);
  const completeDataFetch = useCocktailStore(
    (state) => state.completeDataFetch,
  );
  const failDataFetch = useCocktailStore((state) => state.failDataFetch);

  const handleChangeCategory = (event: React.ChangeEvent<HTMLSelectElement>) =>
    changeCategory(event.target.value as Category);

  let drinkFiltered: DrinkType[];

  if (category === "All") {
    drinkFiltered = drinks;
  } else {
    drinkFiltered = drinks.filter((drink) => drink.strCategory === category);
  }

  const fetchData = useCallback(async () => {
    startDataFetch();
    try {
      const result = await axios(`${API_MAIN}${API_SEARCH}${search}`);
      completeDataFetch(result.data);
    } catch {
      failDataFetch();
    }
  }, [search, startDataFetch, completeDataFetch, failDataFetch]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <>
      {isError ? (
        <ErrorPage
          error={
            new Error("Failed to load drinks. Please check your connection.")
          }
          onRetry={fetchData}
        />
      ) : null}
      {isLoading ? (
        <Message>Loading drinks…</Message>
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
            <Message>
              No drinks available for this category. Please try another one.
            </Message>
          )}
        </>
      )}
    </>
  );
};

export default DrinkList;

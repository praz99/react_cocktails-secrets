import { create } from "zustand";
import type {
  Category,
  CocktailResponse,
  Drink,
  DrinkFetchState,
} from "../types";

export type CocktailStore = {
  data: DrinkFetchState;
  details: DrinkFetchState;
  categories: Category;
  startDataFetch: () => void;
  completeDataFetch: (response: CocktailResponse) => void;
  failDataFetch: () => void;
  startDetailsFetch: () => void;
  completeDetailsFetch: (response: CocktailResponse) => void;
  failDetailsFetch: () => void;
  changeCategory: (category: Category) => void;
  reset: () => void;
};

const initialFetchState: DrinkFetchState = {
  drinks: [],
  isLoading: false,
  isError: false,
};

export const getInitialCocktailStoreState = () => ({
  data: { ...initialFetchState },
  details: { ...initialFetchState },
  categories: "All" as Category,
});

const getDrinks = (response: CocktailResponse): Drink[] =>
  response.drinks ?? [];

const useCocktailStore = create<CocktailStore>((set) => ({
  ...getInitialCocktailStoreState(),
  startDataFetch: () =>
    set((state) => ({
      data: { ...state.data, isLoading: true },
    })),
  completeDataFetch: (response) =>
    set((state) => ({
      data: {
        ...state.data,
        drinks: getDrinks(response),
        isLoading: false,
        isError: false,
      },
    })),
  failDataFetch: () =>
    set((state) => ({
      data: { ...state.data, isLoading: false, isError: true },
    })),
  startDetailsFetch: () =>
    set((state) => ({
      details: { ...state.details, isLoading: true },
    })),
  completeDetailsFetch: (response) =>
    set((state) => ({
      details: {
        ...state.details,
        drinks: getDrinks(response),
        isLoading: false,
        isError: false,
      },
    })),
  failDetailsFetch: () =>
    set((state) => ({
      details: { ...state.details, isLoading: false, isError: true },
    })),
  changeCategory: (categories) => set({ categories }),
  reset: () => set(getInitialCocktailStoreState()),
}));

export default useCocktailStore;

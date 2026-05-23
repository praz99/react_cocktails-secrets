import type { Category, CocktailResponse, Drink } from '../types';

const FETCH_START = 'FETCH_START';
const FETCH_SUCCESS = 'FETCH_SUCCESS';
const FETCH_FAILURE = 'FETCH_FAILURE';
const CHANGE_FILTER = 'CHANGE_FILTER';

type FetchStartAction = {
  type: typeof FETCH_START;
};

type FetchSuccessAction = {
  type: typeof FETCH_SUCCESS;
  payload: Drink[];
};

type FetchFailureAction = {
  type: typeof FETCH_FAILURE;
};

type ChangeFilterAction = {
  type: typeof CHANGE_FILTER;
  category: Category;
};

export type AppAction =
  | FetchStartAction
  | FetchSuccessAction
  | FetchFailureAction
  | ChangeFilterAction;

const dataFetchStart = (): FetchStartAction => ({
  type: FETCH_START,
});

const dataFetchSuccess = (data: CocktailResponse): FetchSuccessAction => ({
  type: FETCH_SUCCESS,
  payload: data.drinks ?? [],
});

const dataFetchFailure = (): FetchFailureAction => ({
  type: FETCH_FAILURE,
});

const detailsFetchStart = (): FetchStartAction => ({
  type: FETCH_START,
});

const detailsFetchSuccess = (data: CocktailResponse): FetchSuccessAction => ({
  type: FETCH_SUCCESS,
  payload: data.drinks ?? [],
});

const detailsFetchFailure = (): FetchFailureAction => ({
  type: FETCH_FAILURE,
});

const changeCategoryAction = (category: Category): ChangeFilterAction => ({
  type: CHANGE_FILTER,
  category,
});

export {
  FETCH_START,
  FETCH_FAILURE,
  FETCH_SUCCESS,
  CHANGE_FILTER,
  dataFetchStart,
  dataFetchSuccess,
  dataFetchFailure,
  detailsFetchStart,
  detailsFetchSuccess,
  detailsFetchFailure,
  changeCategoryAction,
};

import { FETCH_START, FETCH_SUCCESS, FETCH_FAILURE } from '../actions/index';
import type { AppAction } from '../actions/index';
import type { DrinkFetchState } from '../types';

const initialState: DrinkFetchState = {
  drinks: [],
  isLoading: false,
  isError: false,
};

const drinkReducer = (
  state: DrinkFetchState = initialState,
  action: AppAction,
): DrinkFetchState => {
  switch (action.type) {
    case FETCH_START:
      return { ...state, isLoading: true };
    case FETCH_SUCCESS:
      return {
        ...state, isLoading: false, isError: false, drinks: action.payload,
      };
    case FETCH_FAILURE:
      return { ...state, isLoading: false, isError: true };
    default:
      return state;
  }
};

export default drinkReducer;

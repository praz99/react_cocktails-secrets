import type { AppState } from '../types';

const INITIAL_STATE: AppState = {
  data: {
    drinks: [],
    isLoading: false,
    isError: false,
  },

  details: {
    drinks: [],
    isLoading: false,
    isError: false,
  },
  categories: 'All',
};

export default INITIAL_STATE;

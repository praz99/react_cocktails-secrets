import { CHANGE_FILTER } from '../actions/index';
import type { AppAction } from '../actions/index';
import type { Category } from '../types';

const categoriesReducer = (
  state: Category = 'All',
  action: AppAction,
): Category => {
  switch (action.type) {
    case CHANGE_FILTER:
      return action.category;
    default:
      return state;
  }
};

export default categoriesReducer;

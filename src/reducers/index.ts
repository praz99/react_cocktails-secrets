import { createStore, combineReducers } from 'redux';
import drinkFetchReducer from './drinkReducer';
import categoriesReducer from './categoriesReducer';
import detailsReducer from './detailsReducer';
import INITIAL_STATE from '../constants/initialState';

const rootReducer = combineReducers({
  data: drinkFetchReducer,
  details: detailsReducer,
  categories: categoriesReducer,
});

const store = createStore(rootReducer, INITIAL_STATE);

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

export default store;

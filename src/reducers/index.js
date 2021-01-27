import { createStore, combineReducers } from 'redux';
import drinkFetchReducer from './drinkReducer';
import INITIAL_STATE from '../constants/initialState';

const rootReducer = combineReducers({
  data: drinkFetchReducer,
});

const store = createStore(rootReducer, INITIAL_STATE);

export default store;

import { dataFetchStart, dataFetchSuccess, dataFetchFailure } from '../../actions/index';
import drinkReducer from '../../reducers/drinkReducer';

describe('dataReducer', () => {
  const state = {
    drinks : [],
    isLoading: false,
    isError: false,
  }

  describe('action type is FETCH_START', () => {
    it('returns state after setting "isLoading" to "true"', () => {
      expect(drinkReducer(state, dataFetchStart())).toEqual({ drinks: [], isLoading: true, isError: false });
    });
  });

  describe('action type is FETCH_SUCCESS', () => {
    const data = {"drinks": ["drink 1", "drink 2"]}
    it('returns state after setting "isLoading" and "isError" to "false" and payload data to drinks', () => {
      expect(drinkReducer(state, dataFetchSuccess(data))).toEqual({ drinks: ['drink 1', 'drink 2'], isLoading: false, isError: false });
    });
  });  

  describe('action type is FETCH_FAILURE', () => {
    it('returns state after setting "isLoading" to "false" and "isError" to "true"', () => {
      expect(drinkReducer(state, dataFetchFailure())).toEqual({ drinks: [], isLoading: false, isError: true });
    });
  });
});

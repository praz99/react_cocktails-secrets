import { detailsFetchStart, detailsFetchSuccess, detailsFetchFailure } from '../../actions/index';
import detailsReducer from '../../reducers/detailsReducder';

describe('detailsReducer', () => {
  const state = {
    drinks : [],
    isLoading: false,
    isError: false,
  }

  describe('action type is FETCH_START', () => {
    it('returns state after setting "isLoading" to "true"', () => {
      expect(detailsReducer(state, detailsFetchStart())).toEqual({ drinks: [], isLoading: true, isError: false });
    });
  });

  describe('action type is FETCH_SUCCESS', () => {
    const data = {"drinks": ["drink 1", "drink 2"]}
    it('returns state after setting "isLoading" and "isError" to "false" and payload data to drinks', () => {
      expect(detailsReducer(state, detailsFetchSuccess(data))).toEqual({ drinks: ['drink 1', 'drink 2'], isLoading: false, isError: false });
    });
  });  

  describe('action type is FETCH_FAILURE', () => {
    it('returns state after setting "isLoading" to "false" and "isError" to "true"', () => {
      expect(detailsReducer(state, detailsFetchFailure())).toEqual({ drinks: [], isLoading: false, isError: true });
    });
  });
});

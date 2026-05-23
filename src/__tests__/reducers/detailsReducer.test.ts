import { detailsFetchStart, detailsFetchSuccess, detailsFetchFailure } from '../../actions/index';
import detailsReducer from '../../reducers/detailsReducer';
import type { Drink } from '../../types';

describe('detailsReducer', () => {
  const state = {
    drinks: [],
    isLoading: false,
    isError: false,
  };

  describe('action type is FETCH_START', () => {
    it('returns state after setting "isLoading" to "true"', () => {
      expect(detailsReducer(state, detailsFetchStart())).toEqual(
        {
          drinks: [],
          isLoading: true,
          isError: false,
        },
      );
    });
  });

  describe('action type is FETCH_SUCCESS', () => {
    const drinks: Drink[] = [
      {
        idDrink: '13501',
        strDrink: 'ABC',
        strDrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/tqpvqp1472668328.jpg',
      },
      {
        idDrink: '13502',
        strDrink: 'DEF',
        strDrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/tqpvqp1472668329.jpg',
      },
    ];
    const data = { drinks };
    it('returns state after setting "isLoading" and "isError" to "false" and payload data to drinks', () => {
      expect(detailsReducer(state, detailsFetchSuccess(data))).toEqual(
        {
          drinks,
          isLoading: false,
          isError: false,
        },
      );
    });
  });

  describe('action type is FETCH_FAILURE', () => {
    it('returns state after setting "isLoading" to "false" and "isError" to "true"', () => {
      expect(detailsReducer(state, detailsFetchFailure())).toEqual(
        {
          drinks: [],
          isLoading: false,
          isError: true,
        },
      );
    });
  });
});

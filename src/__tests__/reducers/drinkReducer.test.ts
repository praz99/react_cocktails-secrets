import { dataFetchStart, dataFetchSuccess, dataFetchFailure } from '../../actions/index';
import drinkReducer from '../../reducers/drinkReducer';
import type { Drink } from '../../types';

describe('dataReducer', () => {
  const state = {
    drinks: [],
    isLoading: false,
    isError: false,
  };

  describe('action type is FETCH_START', () => {
    it('returns state after setting "isLoading" to "true"', () => {
      expect(drinkReducer(state, dataFetchStart())).toEqual(
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
      expect(drinkReducer(state, dataFetchSuccess(data))).toEqual(
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
      expect(drinkReducer(state, dataFetchFailure())).toEqual(
        {
          drinks: [],
          isLoading: false,
          isError: true,
        },
      );
    });
  });
});

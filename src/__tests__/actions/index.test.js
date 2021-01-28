import {
  dataFetchSuccess,
  dataFetchFailure,
  dataFetchStart,
  changeCategoryAction,
} from '../../actions/index';

describe('actions', () => {
  describe('dataFetchStart', () => {
    it('returns an object with type property', () => {
      expect(dataFetchStart()).toEqual({ type: 'FETCH_START' });
    });
  });

  describe('dataFetchSuccess', () => {
    const data = {
      drinks: [{
        idDrink: '13501', strDrink: 'ABC', strCategory: 'Shot', strAlcoholic: 'Alcoholic', strGlass: 'Shot glass',
      }],
    };
    it('returns an object with type property and payload', () => {
      expect(dataFetchSuccess(data)).toEqual({
        type: 'FETCH_SUCCESS',
        payload: [{
          idDrink: '13501', strDrink: 'ABC', strCategory: 'Shot', strAlcoholic: 'Alcoholic', strGlass: 'Shot glass',
        }],
      });
    });
  });

  describe('dataFetchFailure', () => {
    it('returns an object with type property and payload', () => {
      expect(dataFetchFailure()).toEqual({ type: 'FETCH_FAILURE' });
    });
  });

  describe('changeCategoryAction', () => {
    const category = 'Shots';
    it('returns an object with type property and payload', () => {
      expect(changeCategoryAction(category)).toEqual({ type: 'CHANGE_FILTER', category: 'Shots' });
    });
  });
});

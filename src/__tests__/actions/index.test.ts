import {
  dataFetchSuccess,
  dataFetchFailure,
  dataFetchStart,
  changeCategoryAction,
} from '../../actions/index';

describe('actions', () => {
  const drink = {
    idDrink: '13501',
    strDrink: 'ABC',
    strCategory: 'Shot',
    strAlcoholic: 'Alcoholic',
    strGlass: 'Shot glass',
    strDrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/tqpvqp1472668328.jpg',
  };

  describe('dataFetchStart', () => {
    it('returns an object with type property', () => {
      expect(dataFetchStart()).toEqual({ type: 'FETCH_START' });
    });
  });

  describe('dataFetchSuccess', () => {
    const data = {
      drinks: [drink],
    };
    it('returns an object with type property and payload', () => {
      expect(dataFetchSuccess(data)).toEqual({
        type: 'FETCH_SUCCESS',
        payload: [drink],
      });
    });
  });

  describe('dataFetchFailure', () => {
    it('returns an object with type property and payload', () => {
      expect(dataFetchFailure()).toEqual({ type: 'FETCH_FAILURE' });
    });
  });

  describe('changeCategoryAction', () => {
    const category = 'Shot';
    it('returns an object with type property and payload', () => {
      expect(changeCategoryAction(category)).toEqual({ type: 'CHANGE_FILTER', category: 'Shot' });
    });
  });
});

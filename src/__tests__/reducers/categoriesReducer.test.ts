import { changeCategoryAction } from '../../actions/index';
import type { AppAction } from '../../actions/index';
import categoriesReducer from '../../reducers/categoriesReducer';

describe('categories reducer', () => {
  it('returns a category if action type is "CHANGE_FILTER"', () => {
    expect(categoriesReducer('All', changeCategoryAction('Cocktail'))).toEqual('Cocktail');
  });

  it('returns the unchanged state if there is no action type', () => {
    expect(categoriesReducer('All', { type: 'RANDOM' } as unknown as AppAction)).toEqual('All');
  });
});

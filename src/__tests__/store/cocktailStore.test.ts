import useCocktailStore, {
  getInitialCocktailStoreState,
} from '../../store/cocktailStore';
import type { Drink } from '../../types';

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

beforeEach(() => {
  useCocktailStore.getState().reset();
});

describe('cocktail store', () => {
  it('starts data fetches', () => {
    useCocktailStore.getState().startDataFetch();

    expect(useCocktailStore.getState().data).toEqual({
      drinks: [],
      isLoading: true,
      isError: false,
    });
  });

  it('completes data fetches', () => {
    useCocktailStore.getState().completeDataFetch({ drinks });

    expect(useCocktailStore.getState().data).toEqual({
      drinks,
      isLoading: false,
      isError: false,
    });
  });

  it('handles failed data fetches', () => {
    useCocktailStore.getState().failDataFetch();

    expect(useCocktailStore.getState().data).toEqual({
      drinks: [],
      isLoading: false,
      isError: true,
    });
  });

  it('starts details fetches', () => {
    useCocktailStore.getState().startDetailsFetch();

    expect(useCocktailStore.getState().details).toEqual({
      drinks: [],
      isLoading: true,
      isError: false,
    });
  });

  it('completes details fetches', () => {
    useCocktailStore.getState().completeDetailsFetch({ drinks });

    expect(useCocktailStore.getState().details).toEqual({
      drinks,
      isLoading: false,
      isError: false,
    });
  });

  it('handles failed details fetches', () => {
    useCocktailStore.getState().failDetailsFetch();

    expect(useCocktailStore.getState().details).toEqual({
      drinks: [],
      isLoading: false,
      isError: true,
    });
  });

  it('changes the active category', () => {
    useCocktailStore.getState().changeCategory('Cocktail');

    expect(useCocktailStore.getState().categories).toBe('Cocktail');
  });

  it('resets to initial state', () => {
    useCocktailStore.getState().changeCategory('Shot');
    useCocktailStore.getState().completeDataFetch({ drinks });

    useCocktailStore.getState().reset();

    expect(useCocktailStore.getState().data).toEqual(getInitialCocktailStoreState().data);
    expect(useCocktailStore.getState().details).toEqual(getInitialCocktailStoreState().details);
    expect(useCocktailStore.getState().categories).toBe('All');
  });
});

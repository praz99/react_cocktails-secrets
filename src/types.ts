export type Category =
  | 'All'
  | 'Cocktail'
  | 'Shot'
  | 'Ordinary Drink'
  | 'Punch / Party Drink'
  | 'Coffee / Tea'
  | 'Soft Drink / Soda'
  | 'Beer'
  | 'Cocoa';

export interface Drink {
  idDrink: string;
  strDrink: string;
  strDrinkThumb: string;
  strCategory?: string;
  strAlcoholic?: string;
  strGlass?: string;
  strInstructions?: string;
  [key: string]: string | null | undefined;
}

export interface CocktailResponse {
  drinks: Drink[] | null;
}

export interface DrinkFetchState {
  drinks: Drink[];
  isLoading: boolean;
  isError: boolean;
}

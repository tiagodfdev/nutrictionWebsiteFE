/* eslint-disable no-restricted-syntax */
import { IIngredients, IkeyOfIngredients } from '../../types';
import map from '../consts/ingredientMap';

const ingredientKeyConverter = (ingredient:IIngredients | string) => map.get(ingredient);

export function getByValue(searchValue:IkeyOfIngredients | string) {
  for (const [key, value] of map.entries()) {
    if (value === searchValue) { return key; }
  }
  return false;
}

export default ingredientKeyConverter;

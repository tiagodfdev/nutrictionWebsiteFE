import { IIngredients } from '../../types';
import map from '../consts/ingredientMap';

const ingredientKeyConverter = (ingredient:IIngredients | string) => map.get(ingredient);

export default ingredientKeyConverter;

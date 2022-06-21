import { IIngredients } from '../../types';
import map from '../consts/ingredientMap';

const ingredientKeyConverter = (ingredient:IIngredients) => map.get(ingredient);

export default ingredientKeyConverter;

import { IIngredients } from '../../types';
import map from '../consts/ingredientRelations';

const ingredientKeyConverter = (ingredient:IIngredients) => map.get(ingredient);

export default ingredientKeyConverter;

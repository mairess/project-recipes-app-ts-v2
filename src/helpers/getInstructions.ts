import { DrinkType, MealType } from '../types';

const getInstructions = (recipe: MealType | DrinkType) => {
  const { strInstructions } = recipe;
  return strInstructions;
};

export default getInstructions;

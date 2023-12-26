import { DoneRecipesType } from '../types';

const isRecipeDone = (theId: string) => {
  const storedRecipes = localStorage.getItem('doneRecipes');
  const theDoneRecipes = storedRecipes ? JSON.parse(storedRecipes) : [];

  return Array.isArray(theDoneRecipes) && theDoneRecipes
    .some((recipe: DoneRecipesType) => recipe.id === theId);
};

export default isRecipeDone;

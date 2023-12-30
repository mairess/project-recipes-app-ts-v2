import { DoneRecipesType } from '../types';

const convertedDate = () => {
  const stored = localStorage.getItem('doneRecipes');
  const parsed = stored ? JSON.parse(stored) : [];

  const formattedDate = parsed.map((doneRecipe: DoneRecipesType) => {
    const date = new Date(doneRecipe.doneDate);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');

    const year = date.getFullYear();

    const formatted = `${day}/${month}/${year}`;
    return {
      ...doneRecipe,
      doneDate: formatted,
    };
  });

  return formattedDate;
};

export default convertedDate;

import { format } from 'date-fns';
import { DoneRecipesType } from '../types';

const convertedDate = () => {
  const stored = localStorage.getItem('doneRecipes');
  const parsed = stored ? JSON.parse(stored) : [];

  const formattedDate = parsed.map((doneRecipe: DoneRecipesType) => ({
    ...doneRecipe,
    doneDate: format(doneRecipe.doneDate, 'dd/MM/yyy'),
  }));

  return formattedDate;
};

export default convertedDate;

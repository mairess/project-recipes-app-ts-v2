import { useState } from 'react';
import {
  API_MEALS_BY_INGREDIENT,
  API_MEALS_BY_NAME,
  API_MEALS_BY_LETTER,
} from '../helpers/endpoints';

const useFetchTheMeals = async (searchTerm: string, filter: string) => {
  const [theMeals, setTheMeals] = useState();
  const MEALS_BY_INGREDIENT = `${API_MEALS_BY_INGREDIENT}${searchTerm}`;
  const MEALS_BY_NAME = `${API_MEALS_BY_NAME}${searchTerm}`;
  const MEALS_BY_LETTER = `${API_MEALS_BY_LETTER}${searchTerm}`;

  let endpoint;

  switch (filter) {
    case 'Ingredient':
      endpoint = MEALS_BY_INGREDIENT;
      break;
    case 'Name':
      endpoint = MEALS_BY_NAME;
      break;
    case 'First Letter':
      endpoint = MEALS_BY_LETTER;
      break;
    default:
      endpoint = MEALS_BY_INGREDIENT;
      break;
  }

  const response = await fetch(endpoint);
  const data = await response.json();
  const { meals } = data;
  setTheMeals(meals);

  return theMeals;
};

export default useFetchTheMeals;

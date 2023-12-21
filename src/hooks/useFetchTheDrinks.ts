import { useState } from 'react';
import { Drink } from '../types';
import {
  API_DRINKS_BY_INGREDIENT,
  API_DRINKS_BY_NAME,
  API_DRINKS_BY_LETTER,
} from '../helpers/endpoints';

const useFetchTheDrinks = async (searchTerm: string, filter: string) => {
  const [theDrinks, setTheDrinks] = useState<Drink[]>([]);
  const DRINKS_BY_INGREDIENT = `${API_DRINKS_BY_INGREDIENT}${searchTerm}`;
  const DRINKS_BY_NAME = `${API_DRINKS_BY_NAME}${searchTerm}`;
  const DRINKS_BY_LETTER = `${API_DRINKS_BY_LETTER}${searchTerm}`;

  let endpoint;

  switch (filter) {
    case 'Ingredient':
      endpoint = DRINKS_BY_INGREDIENT;
      break;
    case 'Name':
      endpoint = DRINKS_BY_NAME;
      break;
    case 'First Letter':
      endpoint = DRINKS_BY_LETTER;
      break;
    default:
      endpoint = DRINKS_BY_INGREDIENT;
      break;
  }

  const response = await fetch(endpoint);
  const data = await response.json();
  const { drinks } = data;
  setTheDrinks(drinks);

  return { theDrinks };
};

export default useFetchTheDrinks;

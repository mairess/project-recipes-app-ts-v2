import {
  API_MEALS_BY_INGREDIENT,
  API_MEALS_BY_NAME,
  API_MEALS_BY_LETTER,
} from '../helpers/endpoints';

const fetchMeals = async (searchTerm: string, filter: string) => {
  const MEALS_BY_INGREDIENT = `${API_MEALS_BY_INGREDIENT}${searchTerm}`;
  const MEALS_BY_NAME = `${API_MEALS_BY_NAME}${searchTerm}`;
  const MEALS_BY_LETTER = `${API_MEALS_BY_LETTER}${searchTerm}`;

  const MEALS_BY_LETTER_DEFAULT = `${API_MEALS_BY_LETTER}a`;

  let endpoint;

  switch (filter) {
    case 'Ingredient':
      endpoint = MEALS_BY_INGREDIENT;
      break;
    case 'Name':
      endpoint = MEALS_BY_NAME;
      break;
    case 'First Letter':
      endpoint = searchTerm ? MEALS_BY_LETTER : MEALS_BY_LETTER_DEFAULT;
      break;
    default:
      endpoint = API_MEALS_BY_NAME;
      break;
  }

  const response = await fetch(endpoint);
  const data = await response.json();
  const { meals } = data;

  return meals;
};

export default fetchMeals;

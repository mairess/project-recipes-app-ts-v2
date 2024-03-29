import {
  API_DRINKS_BY_INGREDIENT,
  API_DRINKS_BY_NAME,
  API_DRINKS_BY_LETTER,
} from '../helpers/endpoints';

const fetchDrinks = async (searchTerm: string, filter: string) => {
  const DRINKS_BY_INGREDIENT = `${API_DRINKS_BY_INGREDIENT}${searchTerm}`;
  const DRINKS_BY_NAME = `${API_DRINKS_BY_NAME}${searchTerm}`;
  const DRINKS_BY_LETTER = `${API_DRINKS_BY_LETTER}${searchTerm}`;

  const DRINKS_BY_LETTER_DEFAULT = `${API_DRINKS_BY_LETTER}a`;

  let endpoint;

  switch (filter) {
    case 'Ingredient':
      endpoint = DRINKS_BY_INGREDIENT;
      break;
    case 'Name':
      endpoint = DRINKS_BY_NAME;
      break;
    case 'First Letter':
      endpoint = searchTerm ? DRINKS_BY_LETTER : DRINKS_BY_LETTER_DEFAULT;
      break;
    default:
      endpoint = DRINKS_BY_NAME;
      break;
  }

  const response = await fetch(endpoint);
  const data = await response.json();
  const { drinks } = data;

  return drinks;
};

export default fetchDrinks;

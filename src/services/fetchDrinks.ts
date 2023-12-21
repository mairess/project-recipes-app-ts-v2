import {
  API_DRINKS_BY_INGREDIENT,
  API_DRINKS_BY_NAME,
  API_DRINKS_BY_LETTER,
} from '../helpers/endpoints';

const fetchDrinks = async (searchTerm: string, filter: string) => {
  const DRINKS_BY_INGREDIENT = `${API_DRINKS_BY_INGREDIENT}${searchTerm}`;
  const DRINKS_BY_NAME = `${API_DRINKS_BY_NAME}${searchTerm}`;
  const DRINKS_BY_LETTER = `${API_DRINKS_BY_LETTER}${searchTerm}`;

  const DRINKS_BY_NAME_DEFAULT = `${API_DRINKS_BY_NAME}a`;
  const DRINKS_BY_INGREDIENT_DEFAULT = `${API_DRINKS_BY_INGREDIENT}vodka`;

  let endpoint;

  switch (filter) {
    case 'Ingredient':
      endpoint = searchTerm ? DRINKS_BY_INGREDIENT : DRINKS_BY_INGREDIENT_DEFAULT;
      break;
    case 'Name':
      endpoint = DRINKS_BY_NAME;
      break;
    case 'First Letter':
      endpoint = searchTerm ? DRINKS_BY_LETTER : DRINKS_BY_NAME_DEFAULT;
      break;
    default:
      endpoint = DRINKS_BY_INGREDIENT_DEFAULT;
      break;
  }

  const response = await fetch(endpoint);
  const data = await response.json();
  const { drinks } = data;

  return drinks;
};

export default fetchDrinks;

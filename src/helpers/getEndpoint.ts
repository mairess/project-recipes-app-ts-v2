import {
  API_MEALS_BY_INGREDIENT,
  API_MEALS_BY_NAME,
  API_MEALS_BY_LETTER,
  API_DRINKS_BY_INGREDIENT,
  API_DRINKS_BY_NAME,
  API_DRINKS_BY_LETTER,
} from './endpoints';

const getEndpoint = (term: string, pagePath: string) => {
  const MEALS_BY_INGREDIENT = `${API_MEALS_BY_INGREDIENT}${term}`;
  const MEALS_BY_NAME = `${API_MEALS_BY_NAME}${term}`;
  const MEALS_BY_LETTER = `${API_MEALS_BY_LETTER}${term}`;

  const DRINKS_BY_INGREDIENT = `${API_DRINKS_BY_INGREDIENT}${term}`;
  const DRINKS_BY_NAME = `${API_DRINKS_BY_NAME}${term}`;
  const DRINKS_BY_LETTER = `${API_DRINKS_BY_LETTER}${term}`;

  let ENDPOINT_BY_INGREDIENT;
  let ENDPOINT_BY_NAME;
  let ENDPOINT_BY_LETTER;

  if (pagePath === '/meals') {
    ENDPOINT_BY_INGREDIENT = MEALS_BY_INGREDIENT;
    ENDPOINT_BY_NAME = MEALS_BY_NAME;
    ENDPOINT_BY_LETTER = MEALS_BY_LETTER;

    return {
      ENDPOINT_BY_INGREDIENT,
      ENDPOINT_BY_NAME,
      ENDPOINT_BY_LETTER,
    };
  }

  ENDPOINT_BY_INGREDIENT = DRINKS_BY_INGREDIENT;
  ENDPOINT_BY_NAME = DRINKS_BY_NAME;
  ENDPOINT_BY_LETTER = DRINKS_BY_LETTER;

  return {
    ENDPOINT_BY_INGREDIENT,
    ENDPOINT_BY_NAME,
    ENDPOINT_BY_LETTER,
  };
};

export default getEndpoint;

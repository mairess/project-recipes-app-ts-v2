import { useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import getEndpoint from '../helpers/getEndpoint';
import FoodContext from '../context/FoodContext';

const useFetchMeals = (termToSearch: string) => {
  const { isButtonClicked, filter } = useContext(FoodContext);
  const { pathname } = useLocation();
  const pagePath = pathname.slice(1);

  let endpoint: string;

  switch (filter) {
    case 'Ingredient':
      endpoint = getEndpoint(termToSearch, pathname).ENDPOINT_BY_INGREDIENT;
      break;
    case 'Name':
      endpoint = getEndpoint(termToSearch, pathname).ENDPOINT_BY_NAME;
      break;
    case 'First Letter':
      endpoint = getEndpoint(termToSearch, pathname).ENDPOINT_BY_LETTER;
      break;
    default:
      endpoint = getEndpoint(termToSearch, pathname).ENDPOINT_BY_INGREDIENT;
      break;
  }

  useEffect(() => {
    const getTheMeals = async () => {
      const data = await fetch(endpoint);
      const content = await data.json();
      console.log(content[pagePath]);

      return content[pagePath];
    };

    if (filter === 'First Letter' && termToSearch.length > 1) {
      alert('Your search must have only 1 (one) character');
      return;
    }

    if (isButtonClicked) {
      getTheMeals();
    }
  }, [isButtonClicked, filter]);

  return { endpoint };
};

export default useFetchMeals;

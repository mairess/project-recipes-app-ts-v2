import { useContext, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import getEndpoint from '../helpers/getEndpoint';
import FoodContext from '../context/FoodContext';

const useFetchMeals = (termToSearch: string) => {
  const { isButtonClicked, filter, alertShown, setAlertShown } = useContext(FoodContext);
  const { pathname } = useLocation();
  const [apiData, setApiData] = useState('');
  const [theId, setTheId] = useState('');
  const [theRoute, setTheRoute] = useState('');
  const navigate = useNavigate();
  const pagePath = pathname.slice(1);

  let endpoint: string;
  const filterFirstLetter = 'First Letter';

  switch (filter) {
    case 'Ingredient':
      endpoint = getEndpoint(termToSearch, pathname).ENDPOINT_BY_INGREDIENT;
      break;
    case 'Name':
      endpoint = getEndpoint(termToSearch, pathname).ENDPOINT_BY_NAME;
      break;
    case filterFirstLetter:
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
      setApiData(content[pagePath]);
      setTheRoute(pagePath);
      const [obj] = content[pagePath];
      const { idMeal, idDrink } = obj;
      const id = idMeal || idDrink;
      setTheId(id);
    };

    if (apiData.length === 1) {
      navigate(`/${theRoute}/${theId}`);
    }

    if (filter === filterFirstLetter && termToSearch.length > 1 && !alertShown) {
      setAlertShown(true);
      alert('Your search must have only 1 (one) character');
    }

    if (isButtonClicked) {
      getTheMeals();
    }

    return () => {};
  }, [isButtonClicked, alertShown]);

  return { apiData };
};

export default useFetchMeals;

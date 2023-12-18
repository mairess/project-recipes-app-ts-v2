import { useContext, useEffect } from 'react';
import FoodContext from '../context/FoodContext';

const useFetchMeals = (termToSearch: string) => {
  const { isButtonClicked, filter } = useContext(FoodContext);
  let endpoint: string;

  switch (filter) {
    case 'Ingredient':
      endpoint = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${termToSearch}`;
      break;
    case 'Name':
      endpoint = `https://www.themealdb.com/api/json/v1/1/search.php?s=${termToSearch}`;
      break;
    case 'First Letter':
      endpoint = `https://www.themealdb.com/api/json/v1/1/search.php?f=${termToSearch}`;
      break;
    default:
      endpoint = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${termToSearch}`;
      break;
  }

  useEffect(() => {
    const getTheMeals = async () => {
      const data = await fetch(endpoint);
      const meals = await data.json();
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

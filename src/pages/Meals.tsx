import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import fetchMeals from '../services/fetchMeals';
import FoodContext from '../context/FoodContext';
import { SearchTermContext } from '../context/SearchTermContext';

function Meals() {
  const [theMeals, setTheMeals] = useState([]);
  const { isButtonClicked, alertShown, setAlertShown } = useContext(FoodContext);
  const { searchTerm } = useContext(SearchTermContext);
  const { filter } = useContext(FoodContext);
  const navigate = useNavigate();

  useEffect(() => {
    const getTheMeals = async () => {
      const meals = await fetchMeals(searchTerm, filter);
      setTheMeals(meals);
    };
    getTheMeals();
  }, [searchTerm, isButtonClicked]);

  useEffect(() => {
    if (theMeals && theMeals.length === 1 && isButtonClicked) {
      const [obj] = theMeals;
      const { idMeal } = obj;

      navigate(`/meals/${idMeal}`);
    }
  }, [isButtonClicked]);

  useEffect(() => {
    if (filter === 'First Letter' && searchTerm.length > 1 && !alertShown) {
      setAlertShown(true);
      alert('Your search must have only 1 (one) character');
    }
  }, [isButtonClicked]);

  return (
    <h1>Meals</h1>
  );
}

export default Meals;

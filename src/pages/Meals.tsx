import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Meal } from '../types';
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
      const [obj] = meals;
      const { idMeal } = obj;
      if (meals.length === 1) {
        navigate(`/meals/${idMeal}`);
      }
    };
    getTheMeals();
  }, [isButtonClicked]);

  useEffect(() => {
    if (filter === 'First Letter' && searchTerm.length > 1 && !alertShown) {
      setAlertShown(true);
      alert('Your search must have only 1 (one) character');
    }
  }, [isButtonClicked]);

  return (
    <div>
      {theMeals && theMeals.slice(0, 12).map((meal: Meal, index: number) => (
        <div
          data-testid={ `${index}-recipe-card` }
          key={ meal.idMeal }
        >
          <h1
            data-testid={ `${index}-card-name` }
          >
            {meal.strMeal}
          </h1>
          <img
            data-testid={ `${index}-card-img` }
            style={ { width: '163.34608px', height: '134.85408px' } }
            src={ meal.strMealThumb }
            alt={ meal.strMeal }
          />
        </div>
      ))}
    </div>
  );
}

export default Meals;

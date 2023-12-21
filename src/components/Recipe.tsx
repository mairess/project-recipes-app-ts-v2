import { useContext, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import fetchMeals from '../services/fetchMeals';
import fetchDrinks from '../services/fetchDrinks';
import FoodContext from '../context/FoodContext';
import { SearchTermContext } from '../context/SearchTermContext';
import { Drink, Meal } from '../types';

function Recipe() {
  const [recipe, setRecipe] = useState<Meal[] | Drink[]>([]);
  const { isButtonClicked, alertShown, setAlertShown } = useContext(FoodContext);
  const { searchTerm } = useContext(SearchTermContext);
  const { filter } = useContext(FoodContext);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const routeValidation = (pathname === '/meals');

  useEffect(() => {
    const getTheRecipes = async () => {
      try {
        const theRecipe = routeValidation
          ? await fetchMeals(searchTerm, filter)
          : await fetchDrinks(searchTerm, filter);
        setRecipe(theRecipe);

        const [obj] = theRecipe;
        const { idMeal, idDrink } = obj;

        if (theRecipe.length === 1) {
          const theId = routeValidation ? idMeal : idDrink;
          navigate(`${pathname}/${theId}`);
        }
      } catch (error) {
        if (isButtonClicked) {
          setAlertShown(true);
          alert("Sorry, we haven't found any recipes for these filters.");
        }
        console.error(error);
      }
    };
    getTheRecipes();
  }, [isButtonClicked]);

  useEffect(() => {
    if (filter === 'First Letter' && searchTerm.length > 1 && !alertShown) {
      setAlertShown(true);
      alert('Your search must have only 1 (one) character');
    }
  }, [isButtonClicked]);

  return (
    <div>
      {recipe && recipe.slice(0, 12).map((item: Meal | Drink, index: number) => (
        <div
          data-testid={ `${index}-recipe-card` }
          key={ routeValidation
            ? (item as Meal).idMeal
            : (item as Drink).idDrink }
        >
          <h1
            data-testid={ `${index}-card-name` }
          >
            {routeValidation
              ? (item as Meal).strMeal
              : (item as Drink).strDrink}
          </h1>
          <img
            data-testid={ `${index}-card-img` }
            style={ { width: '163.34608px', height: '134.85408px' } }
            src={ routeValidation
              ? (item as Meal).strMealThumb
              : (item as Drink).strDrinkThumb }
            alt={ routeValidation
              ? (item as Meal).strMeal
              : (item as Drink).strDrink }
          />
        </div>
      ))}
    </div>
  );
}

export default Recipe;

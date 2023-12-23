import { useContext, useEffect, useState } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { Container, Image, RecipeName, Wrapper } from './style';
import fetchMeals from '../../services/fetchMeals';
import fetchDrinks from '../../services/fetchDrinks';
import FoodContext from '../../context/FoodContext';
import { SearchTermContext } from '../../context/SearchTermContext';
import { DrinkCategoryType, DrinkType, MealCategoryType, MealType } from '../../types';

function Cards() {
  const [recipe, setRecipe] = useState<MealType[] | DrinkType[]>([]);
  const { isButtonClicked, alertShown, setAlertShown, filter, categoryResults,
    setCategoryResults } = useContext(FoodContext);
  const { searchTerm } = useContext(SearchTermContext);
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
  }, [isButtonClicked, pathname]);

  useEffect(() => {
    if (filter === 'First Letter' && searchTerm.length > 1 && !alertShown) {
      setAlertShown(true);
      alert('Your search must have only 1 (one) character');
    }
  }, [isButtonClicked]);

  useEffect(() => {
    setCategoryResults([]);
  }, [pathname]);

  const content = categoryResults && categoryResults.length ? categoryResults : recipe;

  return (
    <Container>
      {content && content
        .slice(0, 12)
        .map((
          item: MealType
          | DrinkType
          | MealCategoryType
          | DrinkCategoryType,
          index: number,
        ) => (
          <Link
            to={ `${pathname}/${routeValidation
              ? (item as MealType).idMeal
              : (item as DrinkType).idDrink}` }
            key={ (item as MealType).idMeal || (item as DrinkType).idDrink }
          >
            <Wrapper
              data-testid={ `${index}-recipe-card` }
            >
              <Image
                data-testid={ `${index}-card-img` }
                src={ routeValidation
                  ? (item as MealType).strMealThumb
                  : (item as DrinkType).strDrinkThumb }
                alt={ routeValidation
                  ? (item as MealType).strMeal
                  : (item as DrinkType).strDrink }
              />
              <RecipeName
                data-testid={ `${index}-card-name` }
              >
                {routeValidation
                  ? (item as MealType).strMeal
                  : (item as DrinkType).strDrink}
              </RecipeName>
            </Wrapper>
          </Link>
        ))}
    </Container>
  );
}

export default Cards;

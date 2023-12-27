import { useContext, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import FoodContext from '../../context/FoodContext';
import getIngredientsAndMeasures from '../../helpers/getIngredientsAndMeasures';
import { DrinkType, MealType } from '../../types';
import { Title, Wrapper } from './style';

type IngredientListProps = {
  recipe: MealType[] | DrinkType[];
};

function IngredientListWorks({ recipe }: IngredientListProps) {
  const [data] = recipe;
  const ingredients = data ? getIngredientsAndMeasures(data) : [];
  const {
    handleCheckboxChange,
    checkedIngredients,
    setCheckedIngredients,
  } = useContext(FoodContext);
  const { id = '' } = useParams();
  const { pathname } = useLocation();
  const validation = pathname.includes('/meals');

  useEffect(() => {
    const storedData = localStorage.getItem('inProgressRecipes');
    const parsedData = storedData ? JSON.parse(storedData) : { drinks: {}, meals: {} };

    if (validation) {
      setCheckedIngredients(parsedData.meals[id] || []);
    } else {
      setCheckedIngredients(parsedData.drinks[id] || []);
    }
  }, [id, validation]);

  useEffect(() => {
    const storedData = localStorage.getItem('inProgressRecipes');
    const parsedData = storedData ? JSON.parse(storedData) : { drinks: {}, meals: {} };

    if (validation) {
      parsedData.meals[id] = checkedIngredients;
    } else {
      parsedData.drinks[id] = checkedIngredients;
    }

    localStorage.setItem('inProgressRecipes', JSON.stringify(parsedData));
  }, [checkedIngredients, id, validation]);

  return (
    <>
      <Title>
        Ingredients
      </Title>
      <Wrapper>
        {ingredients
          && ingredients.map((ingredient, index) => (
            <label
              key={ ingredient }
              data-testid={ `${index}-ingredient-step` }
              style={ {
                textDecoration: checkedIngredients.includes(ingredient)
                  ? 'line-through solid rgb(0, 0, 0)'
                  : 'none',
              } }
            >
              <input
                type="checkbox"
                value={ ingredient }
                checked={ checkedIngredients.includes(ingredient) }
                onChange={ () => handleCheckboxChange(ingredient) }
              />
              {ingredient}
            </label>
          ))}
      </Wrapper>
    </>
  );
}

export default IngredientListWorks;

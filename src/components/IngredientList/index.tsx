// import { useLocation } from 'react-router-dom';
import getIngredientsAndMeasures from '../../helpers/getIngredientsAndMeasures';
import { DrinkType, MealType } from '../../types';
import { Title, Wrapper } from './style';

type IngredientListProps = {
  recipe: MealType[] | DrinkType[];
};

function IngredientList({ recipe }: IngredientListProps) {
  const [data] = recipe;
  const ingredients = data ? getIngredientsAndMeasures(data) : [];

  return (
    <>
      <Title>
        Ingredients
      </Title>
      <Wrapper>
        <ul>
          {ingredients && ingredients.map((ingredient, index) => (
            <li
              data-testid={ `${index}-ingredient-name-and-measure` }
              key={ ingredient }
            >
              {ingredient}
            </li>
          ))}
        </ul>

      </Wrapper>
    </>
  );
}

export default IngredientList;

// import { useLocation } from 'react-router-dom';
import getIngredientsAndMeasures from '../../helpers/getIngredientsAndMeasures';
import { DrinkType, MealType } from '../../types';
import { Title, Container } from './style';

type IngredientListProps = {
  recipe: MealType[] | DrinkType[];
};

function IngredientList({ recipe }: IngredientListProps) {
  const [data] = recipe;
  const ingredients = data ? getIngredientsAndMeasures(data) : [];

  return (
    <Container>
      {recipe && recipe.map((item: MealType | DrinkType) => (
        <div
          key={ (item as MealType).idMeal || (item as DrinkType).idDrink }
        >
          <Title>
            Ingredients
          </Title>
        </div>
      ))}
      <ul>
        {ingredients && ingredients.map((ingredient) => (
          <li key={ ingredient }>{ingredient}</li>
        ))}
      </ul>

    </Container>
  );
}

export default IngredientList;

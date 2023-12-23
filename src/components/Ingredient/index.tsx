// import { useLocation } from 'react-router-dom';
import { DrinkType, MealType } from '../../types';
import { Title } from './style';

type IngredientListProps = {
  recipe: MealType[] | DrinkType[];
};

function IngredientList({ recipe }: IngredientListProps) {
//   const { pathname } = useLocation();
//   const validation = pathname.includes('/meals');
  console.log(recipe);

  return (
    <>
      {recipe && recipe.map((item: MealType | DrinkType) => (
        <div
          key={ (item as MealType).idMeal || (item as DrinkType).idDrink }
        >
          <h1>
            {(item as MealType).strMeal || (item as DrinkType).strDrink }
          </h1>
        </div>
      ))}
      <Title>Ingredients</Title>
      <ul>
        <li>Ingredient 1</li>
        <li>Ingredient 2</li>
        <li>Ingredient 3</li>
        <li>Ingredient 4</li>
        <li>Ingredient 5</li>
      </ul>

    </>
  );
}

export default IngredientList;

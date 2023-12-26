import { useState } from 'react';
import getIngredientsAndMeasures from '../../helpers/getIngredientsAndMeasures';
import { DrinkType, MealType } from '../../types';
import { Title, Wrapper } from './style';

type IngredientListProps = {
  recipe: MealType[] | DrinkType[];
};

function IngredientListWorks({ recipe }: IngredientListProps) {
  const [data] = recipe;
  const ingredients = data ? getIngredientsAndMeasures(data) : [];
  const [checkedIngredients, setCheckedIngredients] = useState<string[]>([]);

  console.log(checkedIngredients);

  const handleCheckboxChange = (ingredient: string) => {
    if (checkedIngredients.includes(ingredient)) {
      setCheckedIngredients((prevChecked) => prevChecked
        .filter((item) => item !== ingredient));
    } else {
      setCheckedIngredients((prevChecked) => [...prevChecked, ingredient]);
    }
  };

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

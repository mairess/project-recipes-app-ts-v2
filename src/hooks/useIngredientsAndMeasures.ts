import { useEffect, useState } from 'react';
import getIngredientsAndMeasures from '../helpers/getIngredientsAndMeasures';
import { DrinkType, MealType } from '../types';

function useIngredientsAndMeasures(recipeDetails: MealType[] | DrinkType[]) {
  const [ingredients, setIngredients] = useState<string[]>([]);

  useEffect(() => {
    if (recipeDetails) {
      const [data] = recipeDetails;
      const theIngredients = data ? getIngredientsAndMeasures(data) : [];
      setIngredients(theIngredients);
    }
  }, [recipeDetails]);

  return { ingredients };
}

export default useIngredientsAndMeasures;

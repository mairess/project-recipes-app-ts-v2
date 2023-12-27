import { DrinkType, MealType } from '../types';

const formDoneRecipe = (recipe: MealType[] | DrinkType[], pagePath: string) => {
  if (!recipe || recipe.length === 0) {
    return {
      id: '',
      type: '',
      nationality: '',
      category: '',
      alcoholicOrNot: '',
      name: '',
      image: '',
    };
  }
  const [data] = recipe;
  const validation = pagePath.includes('meals');

  const tags = data.strTags;
  console.log(tags);

  return {
    id: validation ? (data as MealType).idMeal : (data as DrinkType).idDrink,
    nationality: validation ? (data as MealType).strArea : '',
    name: validation ? (data as MealType).strMeal : (data as DrinkType).strDrink,
    category: data.strCategory || '',
    type: validation ? 'meal' : 'drink',
    image: validation
      ? (data as MealType).strMealThumb
      : (data as DrinkType).strDrinkThumb,
    tags: data.strTags?.split(',') || [],
    alcoholicOrNot: validation ? '' : (data as DrinkType).strAlcoholic,
    doneDate: new Date(),
  };
};

export default formDoneRecipe;

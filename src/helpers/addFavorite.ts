import { DrinkType, MealType, FavoriteType } from '../types';

const addFavorite = (
  validation: boolean,
  recipe: MealType | DrinkType,
  theFavorites: FavoriteType[],
) => {
  const newFavorite = {
    id: validation ? (recipe as MealType).idMeal : (recipe as DrinkType).idDrink,
    type: validation ? 'meal' : 'drink',
    nationality: validation ? (recipe as MealType).strArea : '',
    category: validation
      ? (recipe as MealType).strCategory
      : (recipe as DrinkType).strCategory,
    alcoholicOrNot: validation ? '' : (recipe as DrinkType).strAlcoholic,
    name: validation ? (recipe as MealType).strMeal : (recipe as DrinkType).strDrink,
    image: validation
      ? (recipe as MealType).strMealThumb
      : (recipe as DrinkType).strDrinkThumb,
  };

  localStorage
    .setItem('favoriteRecipes', JSON.stringify([...theFavorites, newFavorite]));
};

export default addFavorite;

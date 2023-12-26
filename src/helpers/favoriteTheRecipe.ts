import { MealType, DrinkType, FavoriteType } from '../types';

export const isFavorite = (favorites: FavoriteType[], theId: string) => {
  return favorites.some((favorite) => favorite.id === theId);
};

const removeFavorite = (favorites: FavoriteType[], theId: string) => {
  return favorites.filter((favorite) => favorite.id !== theId);
};

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

  localStorage.setItem('favoriteRecipes', JSON.stringify([...theFavorites, newFavorite]));
};

const favoriteTheRecipe = (
  recipe: MealType | DrinkType,
  theId : string,
  theRoute: string,
) => {
  const validation = theRoute.includes('/meals');
  const storedFavorites = localStorage.getItem('favoriteRecipes');
  const theFavorites = storedFavorites ? JSON.parse(storedFavorites) : [];

  if (isFavorite(theFavorites, theId)) {
    const updatedFavorites = removeFavorite(theFavorites, theId);
    localStorage.setItem('favoriteRecipes', JSON.stringify(updatedFavorites));
  } else {
    addFavorite(validation, recipe, theFavorites);
  }
};

export default favoriteTheRecipe;

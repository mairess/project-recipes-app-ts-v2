import { useContext, useState } from 'react';
import FoodContext from '../context/FoodContext';
import isFavorite from '../helpers/isFavorite';
import removeFavorite from '../helpers/removeFavorite';
import addFavorite from '../helpers/addFavorite';
import { MealType, DrinkType, FavoriteType } from '../types';

function useFavorite() {
  const storedFavorites = localStorage.getItem('favoriteRecipes');
  const theFavorites = storedFavorites ? JSON.parse(storedFavorites) : [];
  const [favoriteList, setFavoriteList] = useState<FavoriteType[]>([]);
  const { setContentToRender } = useContext(FoodContext);

  const favoriteTheRecipe = (
    recipe: MealType | DrinkType,
    theId : string,
    theRoute: string,
  ) => {
    const validation = theRoute.includes('/meals');

    if (isFavorite(theFavorites, theId)) {
      const updatedFavorites = removeFavorite(theFavorites, theId);
      setFavoriteList(updatedFavorites);
      setContentToRender(updatedFavorites);
      localStorage.setItem('favoriteRecipes', JSON.stringify(updatedFavorites));
    } else {
      addFavorite(validation, recipe, theFavorites);
      const storedFavs = localStorage.getItem('favoriteRecipes');
      const theFavs = storedFavs ? JSON.parse(storedFavs) : [];
      setFavoriteList(theFavs);
      setContentToRender(theFavs);
    }
  };

  return { favoriteTheRecipe, setFavoriteList, favoriteList };
}

export default useFavorite;

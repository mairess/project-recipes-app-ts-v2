import { useContext, useEffect, useState } from 'react';
import FoodContext from '../context/FoodContext';
import { DoneRecipesType, FavoriteType } from '../types';

function useDoneAndFavRecipes(theRoute: string) {
  const { filterDone } = useContext(FoodContext);
  const [recipes, setRecipes] = useState<DoneRecipesType[] | FavoriteType[]>([]);

  useEffect(() => {
    let recover = 'doneRecipes';

    if (theRoute === '/favorite-recipes') {
      recover = 'favoriteRecipes';
    }

    const stored = localStorage.getItem(recover);
    const parsed = stored ? JSON.parse(stored) : [];

    setRecipes(parsed);
  }, [filterDone, theRoute]);

  return { recipes };
}

export default useDoneAndFavRecipes;

import { useContext, useEffect, useState } from 'react';
import FoodContext from '../context/FoodContext';
import { DoneRecipesType } from '../types';

function useDoneAndFavRecipes() {
  const { filterDone } = useContext(FoodContext);
  const [recipes, setRecipes] = useState<DoneRecipesType[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem('doneRecipes');
    const parsed = stored ? JSON.parse(stored) : [];

    const getRecipes = () => {
      const filteredRecipes: DoneRecipesType[] = filterDone === 'All' ? parsed : parsed
        .filter((data: DoneRecipesType) => data.type
          .toLowerCase() === filterDone.toLowerCase().slice(0, -1));
      setRecipes(filteredRecipes);
    };
    getRecipes();
  }, [filterDone]);

  return { recipes };
}

export default useDoneAndFavRecipes;

import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MealType, DrinkType } from '../types';
import formDoneRecipe from '../helpers/formDoneRecipe';
import FoodContext from '../context/FoodContext';

function useSubmit(path: string, email?: string) {
  const [showSpin, setShowSpin] = useState(false);
  const { setIsButtonClicked } = useContext(FoodContext);
  const navigate = useNavigate();

  const inProgressRoute = path.split('/')[3];

  const handleSubmit = (theRecipe?: MealType[] | DrinkType[]) => {
    const recipe = theRecipe || [];
    if (path === '/') {
      setShowSpin(true);
      localStorage.setItem('user', JSON.stringify({ email }));
      setTimeout(() => {
        navigate('/meals');
      }, 400);
    }

    if (path === '/meals' || path === '/drinks') {
      setIsButtonClicked(true);
    }

    if ((path.includes('/meals/')
    || path.includes('/drinks/')) && !path.includes('in-progress')) {
      setShowSpin(true);
      navigate(`${path}/in-progress`);
    }

    if (inProgressRoute === 'in-progress') {
      const stored = localStorage.getItem('doneRecipes');
      const parsed = stored ? JSON.parse(stored) : [];
      const newDoneRecipe = formDoneRecipe(recipe, path);
      const updated = [...parsed, newDoneRecipe];
      localStorage.setItem('doneRecipes', JSON.stringify(updated));
      navigate('/done-recipes');
    }
  };

  return { showSpin, handleSubmit };
}

export default useSubmit;

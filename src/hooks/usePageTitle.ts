import { useEffect, useState } from 'react';
import iconPlate from '../images/icon-plate.svg';
import iconGlass from '../images/icon-glass.svg';
import iconProfile from '../images/icon-profile.svg';
import iconDoneRecipes from '../images/icon-done-recipes.svg';
import iconFavoriteRecipes from '../images/icon-favorite-recipes.svg';

function usePageTitle(pagePath: string) {
  const [data, setData] = useState({
    title: '',
    icon: '',
  });

  useEffect(() => {
    switch (pagePath) {
      case '/':
        setData({
          ...data,
          title: 'Login',
        });
        break;
      case '/meals':
        setData({
          ...data,
          title: 'Meals',
          icon: iconPlate,
        });
        break;
      case '/drinks':
        setData({
          ...data,
          title: 'Drinks',
          icon: iconGlass,
        });
        break;
      case '/profile':
        setData({
          ...data,
          title: 'Profile',
          icon: iconProfile,
        });
        break;
      case '/done-recipes':
        setData({
          ...data,
          title: 'Done Recipes',
          icon: iconDoneRecipes,
        });
        break;
      case '/favorite-recipes':
        setData({
          ...data,
          title: 'Favorite Recipes',
          icon: iconFavoriteRecipes,
        });
        break;
      default:
        break;
    }
  }, [pagePath]);

  return { data };
}

export default usePageTitle;

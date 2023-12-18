import { useEffect, useState } from 'react';

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
          icon: '/src/images/icon-plate.svg',
        });
        break;
      case '/drinks':
        setData({
          ...data,
          title: 'Drinks',
          icon: '/src/images/icon-glass.svg',
        });
        break;
      case '/profile':
        setData({
          ...data,
          title: 'Profile',
          icon: '/src/images/icon-profile.svg',
        });
        break;
      case '/done-recipes':
        setData({
          ...data,
          title: 'Done Recipes',
          icon: '/src/images/icon-done-recipes.svg',
        });
        break;
      case '/favorite-recipes':
        setData({
          ...data,
          title: 'Favorite Recipes',
          icon: '/src/images/icon-favorite-recipes.svg',
        });
        break;
      default:
        break;
    }
  }, [pagePath]);

  return { data };
}

export default usePageTitle;

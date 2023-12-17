import { useEffect, useState } from 'react';

function usePageTitle(path: string) {
  const [title, setTitle] = useState('');

  useEffect(() => {
    switch (path) {
      case '/':
        setTitle('Login');
        break;
      case '/meals':
        setTitle('Meals');
        break;
      case '/drinks':
        setTitle('Drinks');
        break;
      case '/profile':
        setTitle('Profile');
        break;
      case '/done-recipes':
        setTitle('Done Recipes');
        break;
      case '/favorite-recipes':
        setTitle('Favorite Recipes');
        break;
      default:
        break;
    }
  }, [path]);

  return { title };
}

export default usePageTitle;

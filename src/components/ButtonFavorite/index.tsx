import { useLocation } from 'react-router-dom';
import useFavorite from '../../hooks/useFavorite';
import blackHeartIcon from '../../images/blackHeartIcon.svg';
import whiteHeartIcon from '../../images/whiteHeartIcon.svg';
import { MealType, DrinkType, FavoriteType } from '../../types';
import { defaultMeal, defaultDrink, defaultFavorite } from './defaultValues';
import { Button } from './style';

type ButtonFavoriteProps = {
  recipe?: MealType | DrinkType,
  favRecipe?: FavoriteType;
  index?: number;
};

function ButtonFavorite({
  recipe = (defaultMeal) || defaultDrink,
  favRecipe = defaultFavorite,
  index = 0,
}: ButtonFavoriteProps) {
  const { favoriteTheRecipe } = useFavorite();
  const { pathname } = useLocation();
  const isFavoritesRoute = pathname.includes('/favorite-recipes');

  const id = isFavoritesRoute
    ? favRecipe.id
    : (recipe as MealType).idMeal || (recipe as DrinkType).idDrink;

  const handleFavoriteClick = () => {
    favoriteTheRecipe(
      recipe,
      id,
      pathname,
    );
  };

  const stored = localStorage.getItem('favoriteRecipes');
  const parsed = stored ? JSON.parse(stored) : [];

  const isFavorite = parsed.some((fav: FavoriteType) => fav.id === id);

  return (
    <Button onClick={ handleFavoriteClick }>
      <img
        data-testid={ isFavoritesRoute
          ? `${index}-horizontal-favorite-btn`
          : 'favorite-btn' }
        src={ isFavorite ? blackHeartIcon : whiteHeartIcon }
        alt="Favorite icon"
      />
    </Button>
  );
}

export default ButtonFavorite;

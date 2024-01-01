import { useLocation } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import FoodContext from '../../context/FoodContext';
import ButtonShare from '../ButtonShare';
import useFavorite from '../../hooks/useFavorite';
import ordinaryDrinkIcon from '../../images/ordinaryDrinkIcon.svg';
import dessertIcon from '../../images/dessertIcon.svg';
import { DrinkType, MealType } from '../../types';
import { Container, RecipeTitle, TopHeader, BottomHeader,
  WrapperIcon, WrapperTag, FavAndShare, ImageBg } from './style';
import LinkCopied from '../LinkCopied';
import ButtonFavorite from '../ButtonFavorite';

type TitleProps = {
  recipe: MealType[] | DrinkType[];
};

function Title({ recipe }: TitleProps) {
  const { setFavoriteList } = useFavorite();
  useEffect(() => {
    const storedFavorites = localStorage.getItem('favoriteRecipes');
    const theFavorites = storedFavorites ? JSON.parse(storedFavorites) : [];
    setFavoriteList(theFavorites);
  }, [setFavoriteList]);

  const { isLinkCopied } = useContext(FoodContext);
  const { pathname } = useLocation();
  const validation = pathname.includes('/meals');

  return (
    recipe && recipe.map((item: MealType | DrinkType) => (
      <Container
        style={ {
          backgroundImage: `url(${
            (item as MealType).strMealThumb
          || (item as DrinkType).strDrinkThumb
          })`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        } }
        key={ (item as MealType).idMeal || (item as DrinkType).idDrink }
      >
        <ImageBg // review here, I put css property display none just to put a test id.
          data-testid="recipe-photo"
          src={ (item as MealType).strMealThumb
              || (item as DrinkType).strDrinkThumb }
          alt={ (item as MealType).strMeal
            || (item as DrinkType).strDrink }
        />
        <TopHeader>
          <WrapperTag>
            <WrapperIcon>
              <img
                src={ validation ? dessertIcon : ordinaryDrinkIcon }
                alt={ validation ? 'Meals Icon' : 'Drinks Icon' }
              />
            </WrapperIcon>
            <p
              data-testid="recipe-category"
            >
              { validation
                ? `${(item as MealType).strCategory}`
                : `${(item as DrinkType).strAlcoholic}` }
            </p>
          </WrapperTag>
          <FavAndShare>
            {isLinkCopied && (
              <LinkCopied />
            )}
            <ButtonShare />
            <ButtonFavorite recipe={ item } />
          </FavAndShare>
        </TopHeader>
        <BottomHeader>
          <RecipeTitle
            data-testid="recipe-title"
          >
            { (item as MealType).strMeal
            || (item as DrinkType).strDrink }
          </RecipeTitle>
        </BottomHeader>
      </Container>
    ))
  );
}

export default Title;

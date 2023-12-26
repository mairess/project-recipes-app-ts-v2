import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import useFavorite from '../../hooks/useFavorite';
import useCopyToClipBoard from '../../hooks/useCopyToClipboard';
import ordinaryDrinkIcon from '../../images/ordinaryDrinkIcon.svg';
import dessertIcon from '../../images/dessertIcon.svg';
import blackHeartIcon from '../../images/blackHeartIcon.svg';
import whiteHeartIcon from '../../images/whiteHeartIcon.svg';
import shareIcon from '../../images/shareIcon.svg';
import { DrinkType, FavoriteType, MealType } from '../../types';
import { Container, RecipeTitle, TopHeader, BottomHeader,
  WrapperIcon, WrapperTag, FavAndShare, ImageBg, LinkCopied } from './style';

type TitleProps = {
  recipe: MealType[] | DrinkType[];
};

function Title({ recipe }: TitleProps) {
  const { favoriteTheRecipe, setFavoriteList, favoriteList } = useFavorite();
  useEffect(() => {
    const storedFavorites = localStorage.getItem('favoriteRecipes');
    const theFavorites = storedFavorites ? JSON.parse(storedFavorites) : [];
    setFavoriteList(theFavorites);
  }, [setFavoriteList]);

  const { isLinkCopied, handCopyToleClipboard } = useCopyToClipBoard();
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
              <LinkCopied>
                Link copied!
              </LinkCopied>
            )}
            <button
              onClick={ handCopyToleClipboard }
            >
              <img
                data-testid="share-btn"
                src={ shareIcon }
                alt="Share icon"
              />
            </button>
            <button
              onClick={ () => favoriteTheRecipe(
                item,
                validation ? (item as MealType).idMeal : (item as DrinkType).idDrink,
                pathname,
              ) }
            >
              <img
                data-testid="favorite-btn"
                src={ favoriteList.some((fav: FavoriteType) => (
                  fav.id === (validation
                    ? (item as MealType).idMeal
                    : (item as DrinkType).idDrink)
                )) ? blackHeartIcon : whiteHeartIcon }
                alt="Favorite icon"
              />
            </button>
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

import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import allMealsIcon from '../../images/allMealsIcon.svg';
import allDrinksIcon from '../../images/allDrinksIcon.svg';
import blackHeartIcon from '../../images/blackHeartIcon.svg';
import shareIcon from '../../images/shareIcon.svg';
import { DrinkType, MealType } from '../../types';
import { Container, RecipeTitle, TopHeader, BottomHeader,
  WrapperIcon, WrapperTag, FavAndShare, ImageBg, LinkCopied } from './style';

type TitleProps = {
  recipe: MealType[] | DrinkType[];
};

function Title({ recipe }: TitleProps) {
  const [isLinkCopied, setIsLinkCopied] = useState(false);
  const { pathname } = useLocation();
  const validation = pathname.includes('/meals');

  const handleClipBoard = () => {
    setIsLinkCopied(true);
    navigator.clipboard.writeText(window.location.href);

    setTimeout(() => {
      setIsLinkCopied(false);
    }, 2000);
  };

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
                src={ validation ? allMealsIcon : allDrinksIcon }
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
              onClick={ handleClipBoard }
            >
              <img
                data-testid="share-btn"
                src={ shareIcon }
                alt="Share icon"
              />
            </button>
            <button>
              <img
                data-testid="favorite-btn"
                src={ blackHeartIcon }
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

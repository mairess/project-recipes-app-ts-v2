import { useLocation } from 'react-router-dom';
import allMealsIcon from '../../images/allMealsIcon.svg';
import allDrinksIcon from '../../images/allDrinksIcon.svg';
import blackHeartIcon from '../../images/blackHeartIcon.svg';
import shareIcon from '../../images/shareIcon.svg';
import { DrinkDetailsType, MealDetailsType } from '../../types';
import { Container, RecipeTitle, TopHeader, BottomHeader,
  WrapperIcon, WrapperTag, FavAndShare } from './style';

type TitleProps = {
  theDetails: MealDetailsType[] | DrinkDetailsType[];
};

function Title({ theDetails }: TitleProps) {
  console.log(theDetails);
  const { pathname } = useLocation();
  const validation = pathname.includes('/meals');

  return (
    theDetails && theDetails.map((item: MealDetailsType | DrinkDetailsType) => (
      <Container
        style={ {
          backgroundImage: `url(${
            (item as MealDetailsType).strMealThumb
          || (item as DrinkDetailsType).strDrinkThumb
          })`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        } }
        key={ (item as MealDetailsType).idMeal || (item as DrinkDetailsType).idDrink }
      >
        <TopHeader>
          <WrapperTag>
            <WrapperIcon>
              <img
                src={ validation ? allMealsIcon : allDrinksIcon }
                alt={ validation ? 'Meals Icon' : 'Drinks Icon' }
              />
            </WrapperIcon>
            <p>
              { validation
                ? `${(item as MealDetailsType).strCategory}`
                : `${(item as DrinkDetailsType).strAlcoholic}` }
            </p>
          </WrapperTag>
          <FavAndShare>
            <img
              src={ shareIcon }
              alt="Share icon"
            />
            <img
              src={ blackHeartIcon }
              alt="Favorite icon"
            />
          </FavAndShare>
        </TopHeader>
        <BottomHeader>
          <RecipeTitle>
            { (item as MealDetailsType).strMeal
            || (item as DrinkDetailsType).strDrink }
          </RecipeTitle>
        </BottomHeader>
      </Container>
    ))
  );
}

export default Title;

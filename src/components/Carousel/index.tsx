import { MealType, DrinkType } from '../../types';
import { Container, Img, Title, WrapperImage } from './style';

type CarouselProps = {
  recommended: MealType[] | DrinkType[];
};

function Recommended({ recommended }:CarouselProps) {
  const theRecommended = recommended.slice(0, 6);
  console.log(theRecommended);
  return (
    <>
      <Title>Recommended</Title>
      <Container>
        {theRecommended.map((item, index) => (
          <WrapperImage
            data-testid={ `${index}-recommendation-card` }
            key={ (item as MealType).idMeal || (item as DrinkType).idDrink }
          >
            <Img
              src={ (item as MealType).strMealThumb || (item as DrinkType).strDrinkThumb }
              alt={ (item as MealType).strMeal || (item as DrinkType).strDrink }
            />
            <p
              data-testid={ `${index}-recommendation-title` }
            >
              { (item as MealType).strMeal || (item as DrinkType).strDrink }
            </p>
          </WrapperImage>
        ))}
      </Container>
    </>
  );
}

export default Recommended;

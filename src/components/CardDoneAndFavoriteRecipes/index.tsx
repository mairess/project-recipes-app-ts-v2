import { useContext } from 'react';
import FoodContext from '../../context/FoodContext';
import ButtonShare from '../ButtonShare';
import convertedDate from '../../helpers/convertedDate';
import { DoneRecipesType } from '../../types';
import { Container, Card, Wrapper, WrapperTag, WrapperButtonShare,
  CardImage, LinkCopied } from './style';
import Tag from '../Tag';

function CardDoneAndFavoriteRecipes() {
  const DoneRecipes = convertedDate();
  const { isLinkCopied } = useContext(FoodContext);

  return (
    <Container>
      {DoneRecipes.map((data: DoneRecipesType, index: number) => (
        <Card key={ data.id }>
          <CardImage
            data-testid={ `${index}-horizontal-image` }
            src={ data.image }
            alt=""
          />
          <Wrapper>
            <h1
              data-testid={ `${index}-horizontal-name` }
            >
              {data.name}
            </h1>
            {data.type === 'meal' && (
              <p
                data-testid={ `${index}-horizontal-text` }
              >
                {`${data.nationality} - ${data.category}`}
              </p>
            )}
            {data.type === 'drink' && (
              <p>
                {data.alcoholicOrNot}
              </p>
            )}
            <p
              data-testid={ `${index}-horizontal-top-text` }
            >
              {`Done in: ${data.doneDate}`}
            </p>
            {data.type === 'meal' && (
              <WrapperTag>
                <Tag theTags={ data.tags } />
              </WrapperTag>
            )}
            {isLinkCopied && (
              <LinkCopied>
                Link copied!
              </LinkCopied>
            )}
          </Wrapper>
          {/* <WrapperButtonShare> */}
          <ButtonShare
            recipeId={ data.id }
            type={ data.type }
          />
          {/* </WrapperButtonShare> */}
        </Card>
      )) }
    </Container>
  );
}

export default CardDoneAndFavoriteRecipes;

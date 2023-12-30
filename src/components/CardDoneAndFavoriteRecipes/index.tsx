import { useContext } from 'react';
import FoodContext from '../../context/FoodContext';
import ButtonShare from '../ButtonShare';
import convertedDate from '../../helpers/convertedDate';
import { DoneRecipesType } from '../../types';
import { Container, Card, Wrapper, Name, CategoryNationality, AlcoholicOrNot,
  DoneDate, WrapperTag, WrapperButtonShare, CardImage, LinkCopied } from './style';
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
            <div>
              <Name
                data-testid={ `${index}-horizontal-name` }
              >
                {data.name}
              </Name>
              {data.type === 'meal' && (
                <CategoryNationality
                  data-testid={ `${index}-horizontal-text` }
                >
                  {`${data.nationality} - ${data.category}`}
                </CategoryNationality>
              )}
            </div>
            {data.type === 'drink' && (
              <AlcoholicOrNot>
                {data.alcoholicOrNot}
              </AlcoholicOrNot>
            )}
            <DoneDate
              data-testid={ `${index}-horizontal-top-text` }
            >
              {`Done in: ${data.doneDate}`}
            </DoneDate>
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
          <WrapperButtonShare>
            <ButtonShare
              recipeId={ data.id }
              type={ data.type }
            />
          </WrapperButtonShare>
        </Card>
      )) }
    </Container>
  );
}

export default CardDoneAndFavoriteRecipes;

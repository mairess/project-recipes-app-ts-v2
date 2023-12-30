import { useContext } from 'react';
import FoodContext from '../../context/FoodContext';
import ButtonShare from '../ButtonShare';
import { DoneRecipesType } from '../../types';
import LinkCopied from '../LinkCopied';
import { Container, Card, Wrapper, Name, CategoryNationality, AlcoholicOrNot,
  DoneDate, WrapperTag, WrapperButtonShare, CardImage } from './style';
import Tag from '../Tag';

function CardDoneAndFavoriteRecipes() {
  const { isLinkCopied, copiedIndex } = useContext(FoodContext);

  const stored = localStorage.getItem('doneRecipes');
  const parsed = stored ? JSON.parse(stored) : [];

  return (
    <Container>
      {parsed.map((data: DoneRecipesType, index: number) => (
        <Card key={ data.id }>
          <CardImage
            data-testid={ `${index}-horizontal-image` }
            src={ data.image }
            alt={ data.name }
          />
          <Wrapper>
            <div>
              <Name
                data-testid={ `${index}-horizontal-name` }
              >
                {data.name}
              </Name>

              <div
                data-testid={ `${index}-horizontal-top-text` }
              >
                { data.type === 'meal'
                && (
                  <CategoryNationality>
                    {`${data.nationality} - ${data.category}`}
                  </CategoryNationality>)}
                {data.type === 'drink' && (
                  <AlcoholicOrNot>
                    {data.alcoholicOrNot}
                  </AlcoholicOrNot>
                )}
              </div>
            </div>
            {copiedIndex === index && isLinkCopied ? (
              <LinkCopied />
            ) : (
              <DoneDate
                data-testid={ `${index}-horizontal-done-date` }
              >
                {`Done in: ${data.doneDate}`}
              </DoneDate>
            )}
            {data.type === 'meal' && (
              <WrapperTag>
                <Tag
                  index={ index }
                  theTags={ data.tags }
                />
              </WrapperTag>
            )}
          </Wrapper>
          <WrapperButtonShare>
            <ButtonShare
              index={ index }
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

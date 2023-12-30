import { useContext } from 'react';
import FoodContext from '../../context/FoodContext';
import ButtonShare from '../ButtonShare';
// import convertedDate from '../../helpers/convertedDate';
import { DoneRecipesType } from '../../types';
import { Container, Card, Wrapper, Name, CategoryNationality, AlcoholicOrNot,
  DoneDate, WrapperTag, WrapperButtonShare, CardImage, LinkCopied } from './style';
import Tag from '../Tag';

function CardDoneAndFavoriteRecipes() {
  // const DoneRecipes = convertedDate();
  const { isLinkCopied } = useContext(FoodContext);

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
              <CategoryNationality
                data-testid={ `${index}-horizontal-top-text` }
              >
                { data.type === 'meal'
                  ? `${data.nationality} - ${data.category}`
                  : (
                    <AlcoholicOrNot>
                      {data.alcoholicOrNot}
                    </AlcoholicOrNot>
                  )}
              </CategoryNationality>
            </div>
            <DoneDate
              data-testid={ `${index}-horizontal-done-date` }
            >
              {`Done in: ${data.doneDate}`}
            </DoneDate>
            {data.type === 'meal' && (
              <WrapperTag>
                <Tag
                  index={ index }
                  theTags={ data.tags }
                />
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

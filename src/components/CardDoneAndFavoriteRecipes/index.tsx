import { useContext } from 'react';
import { Link } from 'react-router-dom';
import useDoneAndFavRecipes from '../../hooks/useDoneAndFavRecipes';
import FoodContext from '../../context/FoodContext';
import ButtonShare from '../ButtonShare';
import { DoneRecipesType } from '../../types';
import LinkCopied from '../LinkCopied';
import { Container, Card, Wrapper, Name, CategoryNationality, AlcoholicOrNot,
  DoneDate, WrapperTag, WrapperButtonShare, CardImage,
  WrapperNameAndCategory } from './style';
import Tag from '../Tag';

function CardDoneAndFavoriteRecipes() {
  const { isLinkCopied, copiedIndex } = useContext(FoodContext);
  const { recipes } = useDoneAndFavRecipes();

  return (
    <Container>
      {recipes.map((data: DoneRecipesType, index: number) => (
        <Card key={ data.id }>
          <Link to={ `/${data.type}s/${data.id}` }>
            <CardImage
              data-testid={ `${index}-horizontal-image` }
              src={ data.image }
              alt={ data.name }
            />
          </Link>
          <Wrapper>
            <WrapperNameAndCategory>
              <Link to={ `/${data.type}s/${data.id}` }>
                <Name
                  data-testid={ `${index}-horizontal-name` }
                >
                  {data.name}
                </Name>
              </Link>
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
            </WrapperNameAndCategory>
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

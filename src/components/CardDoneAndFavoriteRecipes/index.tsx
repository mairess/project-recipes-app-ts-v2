import { useContext, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import useDoneAndFavRecipes from '../../hooks/useDoneAndFavRecipes';
import FoodContext from '../../context/FoodContext';
import ButtonShare from '../ButtonShare';
import { DoneRecipesType, FavoriteType } from '../../types';
import LinkCopied from '../LinkCopied';
import { Container, Card, Wrapper, Name, CategoryNationality, AlcoholicOrNot,
  DoneDate, WrapperTag, WrapperButtonShare, CardImage,
  WrapperNameAndCategory } from './style';
import Tag from '../Tag';

function CardDoneAndFavoriteRecipes() {
  const [
    contentToRender,
    setContentToRender,
  ] = useState<FavoriteType[] | DoneRecipesType[]>([]);
  const { isLinkCopied, copiedIndex, filterDone } = useContext(FoodContext);
  const { pathname } = useLocation();
  const { recipes } = useDoneAndFavRecipes(pathname);

  console.log(recipes);

  useEffect(() => {
    let recoverFromStorage = 'doneRecipes';

    if (pathname === '/favorite-recipes') {
      recoverFromStorage = 'favoriteRecipes';
    }

    const stored = localStorage.getItem(recoverFromStorage);
    const parsed = stored ? JSON.parse(stored) : [];

    setContentToRender(parsed);
  }, [pathname]);

  useEffect(() => {
    if (filterDone === 'All') {
      setContentToRender(recipes);
    } else {
      const filtered = recipes
        .filter((item) => item.type === filterDone.toLocaleLowerCase().slice(0, -1));
      setContentToRender(filtered);
    }
  }, [filterDone, recipes]);

  return (
    <Container>
      {contentToRender.map((data: DoneRecipesType | FavoriteType, index: number) => (
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
                {`Done in: ${(data as DoneRecipesType).doneDate}`}
              </DoneDate>
            )}
            {data.type === 'meal' && (
              <WrapperTag>
                <Tag
                  index={ index }
                  theTags={ (data as DoneRecipesType).tags }
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

import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import IngredientListWorks from '../../components/IngredientListWorks';
import Instructions from '../../components/Instructions';
import Recommended from '../../components/Recommended';
import Button from '../../components/Button';
import fetchCategory from '../../services/fetchCategory';
import fetchDetails from '../../services/fetchDetails';
import { MealType, DrinkType } from '../../types';
import Title from '../../components/Title/Title';
import { Wrapper } from './style';
import isRecipeDone from '../../helpers/isRecipeDone';

function RecipeInProgress() {
  const [recipesDetails, setRecipesDetails] = useState<
  MealType[] | DrinkType[]>([]);
  const [recommended, setRecommended] = useState<MealType[] | DrinkType[]>([]);
  const { id = '' } = useParams();
  const { pathname } = useLocation();
  const validation = pathname.includes('/meals');

  let fetchCategoryParam: string;

  if (validation) {
    fetchCategoryParam = '/drinks';
  } else {
    fetchCategoryParam = '/meals';
  }

  useEffect(() => {
    const getDetails = async () => {
      const theDetails = await fetchDetails(id, pathname);
      setRecipesDetails(theDetails);
    };
    getDetails();
  }, [id, pathname]);

  useEffect(() => {
    const fetchRecommended = async () => {
      const theRecommended = await fetchCategory(fetchCategoryParam, 'All');
      setRecommended(theRecommended);
    };
    fetchRecommended();
  }, [fetchCategoryParam]);
  return (
    <>
      <Title recipe={ recipesDetails } />
      <Wrapper>
        <IngredientListWorks recipe={ recipesDetails } />
        <Instructions recipe={ recipesDetails } />
        <Recommended recommended={ recommended } />
        {!isRecipeDone(id) && <Button />}
      </Wrapper>
    </>
  );
}

export default RecipeInProgress;

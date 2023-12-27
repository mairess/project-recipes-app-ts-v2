import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import IngredientList from '../IngredientList';
import isRecipeDone from '../../helpers/isRecipeDone';
import Button from '../Button';
import Recommended from '../Recommended';
import fetchCategory from '../../services/fetchCategory';
import VideoYouTube from '../VideoYouTube';
import Instructions from '../Instructions';
import IngredientListWorks from '../IngredientListWorks';
import Title from '../Title';
import { MealType, DrinkType } from '../../types';
import fetchDetails from '../../services/fetchDetails';
import { Wrapper } from './style';

function DetailsOrProgress() {
  const [recipesDetails, setRecipesDetails] = useState<
  MealType[] | DrinkType[]>([]);
  const [recommended, setRecommended] = useState<MealType[] | DrinkType[]>([]);
  const { id = '' } = useParams();
  const { pathname } = useLocation();
  const validation = pathname.includes('/meals');
  const isPageInProgress = pathname.includes('/in-progress');

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
        {isPageInProgress
          ? <IngredientListWorks recipe={ recipesDetails } />
          : <IngredientList recipe={ recipesDetails } />}
        <Instructions recipe={ recipesDetails } />
        {validation && <VideoYouTube recipe={ recipesDetails } />}
        <Recommended recommended={ recommended } />
        {!isRecipeDone(id) && <Button />}
      </Wrapper>
    </>
  );
}

export default DetailsOrProgress;

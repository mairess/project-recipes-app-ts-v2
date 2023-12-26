import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import isRecipeDone from '../../helpers/isRecipeDone';
import Button from '../../components/Button';
import Recommended from '../../components/Recommended';
import fetchCategory from '../../services/fetchCategory';
import VideoYouTube from '../../components/VideoYouTube';
import Instructions from '../../components/Instructions/index';
import IngredientList from '../../components/IngredientList';
import Title from '../../components/Title/Title';
import { DrinkType, MealType } from '../../types';
import fetchDetails from '../../services/fetchDetails';
import { Wrapper } from './style';

function RecipeDetails() {
  const [recipesDetails, setRecipesDetails] = useState<
  MealType[] | DrinkType[]>([]);
  const [recommended, setRecommended] = useState<MealType[] | DrinkType[]>([]);
  const { id = '' } = useParams();
  const { pathname } = useLocation();
  const validation = pathname.includes('/meals');
  const fetchCategoryParam = validation ? '/drinks' : '/meals';

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
        <IngredientList recipe={ recipesDetails } />
        <Instructions recipe={ recipesDetails } />
        {validation && <VideoYouTube recipe={ recipesDetails } />}
        <Recommended recommended={ recommended } />
        {!isRecipeDone(id) && <Button />}
      </Wrapper>
    </>
  );
}

export default RecipeDetails;

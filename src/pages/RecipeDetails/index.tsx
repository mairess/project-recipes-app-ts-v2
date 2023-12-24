import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import fetchCategory from '../../services/fetchCategory';
import VideoYouTube from '../../components/VideoYouTube';
import Instructions from '../../components/Instructions/indext';
import IngredientList from '../../components/IngredientList';
import Title from '../../components/Title/Title';
import { DrinkCategoryType, DrinkType, MealType } from '../../types';
import fetchDetails from '../../services/fetchDetails';
import { Wrapper } from './style';

function RecipeDetails() {
  const [recipesDetails, setRecipesDetails] = useState<
  MealType[] | DrinkType[]>([]);
  const [recommendeds, setRecommendeds] = useState<DrinkCategoryType[]>([]);
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
      const theRecommendeds = await fetchCategory(fetchCategoryParam, 'All');
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
      </Wrapper>
    </>
  );
}

export default RecipeDetails;

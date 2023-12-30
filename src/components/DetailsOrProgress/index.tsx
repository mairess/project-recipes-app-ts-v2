import { useContext, useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import IngredientList from '../IngredientList';
import isRecipeDone from '../../helpers/isRecipeDone';
import Recommended from '../Recommended';
import fetchCategory from '../../services/fetchCategory';
import VideoYouTube from '../VideoYouTube';
import Instructions from '../Instructions';
import IngredientListWorks from '../IngredientListWorks';
import Title from '../Title';
import { MealType, DrinkType } from '../../types';
import fetchDetails from '../../services/fetchDetails';
import { Wrapper } from './style';
import useIngredientsAndMeasures from '../../hooks/useIngredientsAndMeasures';
import FoodContext from '../../context/FoodContext';
import Button from '../Button';

function DetailsOrProgress() {
  const [recipesDetails, setRecipesDetails] = useState<
  MealType[] | DrinkType[]>([]);
  const { ingredients } = useIngredientsAndMeasures(recipesDetails);
  const { checkedIngredients } = useContext(FoodContext);
  const [recommended, setRecommended] = useState<MealType[] | DrinkType[]>([]);
  const { id = '' } = useParams();
  const { pathname } = useLocation();
  const validation = pathname.includes('/meals');
  const isPageInProgress = pathname.includes('/in-progress');
  const validationToIngredients = ingredients.length === checkedIngredients.length;
  const isDone = isRecipeDone(id);
  const inRoutInProgress = pathname.includes('in-progress');

  const style: React.CSSProperties = {
    position: 'fixed',
    bottom: '0',
  };

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
        {!isDone && <Button
          buttonConfig={ {
            pathname,
            style,
            theId: id,
            disabled: inRoutInProgress ? validationToIngredients : true,
            theRecipe: recipesDetails,
          } }
        />}
      </Wrapper>
    </>
  );
}

export default DetailsOrProgress;

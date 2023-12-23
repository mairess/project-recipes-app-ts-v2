import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import IngredientList from '../../components/Ingredient';
import Title from '../../components/Title/Title';
import { DrinkDetailsType, MealDetailsType } from '../../types';
import fetchDetails from '../../services/fetchDetails';
import { Wrapper } from './style';

function RecipeDetails() {
  const [recipesDetails, setRecipesDetails] = useState<
  MealDetailsType[] | DrinkDetailsType[]>([]);
  const { id = '' } = useParams();
  const { pathname } = useLocation();

  useEffect(() => {
    const getDetails = async () => {
      const theDetails = await fetchDetails(id, pathname);
      setRecipesDetails(theDetails);
    };
    getDetails();
  }, [id, pathname]);

  return (
    <>
      <Title recipe={ recipesDetails } />
      <Wrapper>
        <IngredientList recipe={ recipesDetails } />
      </Wrapper>
    </>
  );
}

export default RecipeDetails;

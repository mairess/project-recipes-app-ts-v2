import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { DrinkDetailsType, MealDetailsType } from '../types';
import fetchDetails from '../services/fetchDetails';

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
    <div>
      {recipesDetails.map((item: MealDetailsType | DrinkDetailsType) => (
        <div
          key={ (item as MealDetailsType).idMeal || (item as DrinkDetailsType).idDrink }
        >
          {(item as MealDetailsType).strMeal || (item as DrinkDetailsType).strDrink}
        </div>
      ))}
    </div>
  );
}

export default RecipeDetails;

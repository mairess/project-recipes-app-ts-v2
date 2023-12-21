import { useContext, useEffect, useState } from 'react';
import fetchMeals from '../services/fetchMeals';
import { Meal } from '../types';
import MealsContext from './MealsContext';
import FoodContext from './FoodContext';
import { SearchTermContext } from './SearchTermContext';

type FilterProviderProps = {
  children: React.ReactNode,
};

function MealsProvider({ children }: FilterProviderProps) {
  const [meals, setMeals] = useState<Meal[]>([]);
  const { filter, isButtonClicked } = useContext(FoodContext);
  const { searchTerm } = useContext(SearchTermContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const theMeals = await fetchMeals(searchTerm, filter);
        setMeals(theMeals);
      } catch (error) {
        console.error('Erro na requisição:', error);
      }
    };
    fetchData();
  }, [isButtonClicked]);

  return (
    <MealsContext.Provider
      value={ { meals, setMeals } }
    >
      {children}
    </MealsContext.Provider>
  );
}

export default MealsProvider;

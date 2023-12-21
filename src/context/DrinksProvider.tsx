import { useContext, useEffect, useState } from 'react';
import fetchDrinks from '../services/fetchDrinks';
import { Drink } from '../types';
import DrinksContext from './DrinksContext';
import FoodContext from './FoodContext';
import { SearchTermContext } from './SearchTermContext';

type FilterProviderProps = {
  children: React.ReactNode,
};

function DrinksProvider({ children }: FilterProviderProps) {
  const [drinks, setDrinks] = useState<Drink[]>([]);
  const { filter, isButtonClicked } = useContext(FoodContext);
  const { searchTerm } = useContext(SearchTermContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const theDrinks = await fetchDrinks(searchTerm, filter);
        setDrinks(theDrinks);
      } catch (error) {
        console.error('Erro na requisição:', error);
      }
    };
    fetchData();
  }, [isButtonClicked]);

  return (
    <DrinksContext.Provider value={ { drinks, setDrinks } }>
      {children}
    </DrinksContext.Provider>
  );
}

export default DrinksProvider;

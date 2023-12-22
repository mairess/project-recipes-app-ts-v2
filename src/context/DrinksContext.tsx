import { createContext } from 'react';
import { DrinkType } from '../types';

type ContextType = {
  drinks: DrinkType[];
  setDrinks: (value: DrinkType[]) => void;
};

const DrinksContext = createContext({} as ContextType);

export default DrinksContext;

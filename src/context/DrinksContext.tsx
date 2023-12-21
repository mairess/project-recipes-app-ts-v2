import { createContext } from 'react';
import { Drink } from '../types';

type ContextType = {
  drinks: Drink[];
  setDrinks: (value: Drink[]) => void;
};

const DrinksContext = createContext({} as ContextType);

export default DrinksContext;

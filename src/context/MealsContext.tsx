import { createContext } from 'react';
import { MealType } from '../types';

type ContextType = {
  meals: MealType[];
  setMeals: (value: MealType[]) => void;
};

const MealsContext = createContext({} as ContextType);

export default MealsContext;

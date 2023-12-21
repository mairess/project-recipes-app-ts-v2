import { createContext } from 'react';
import { Meal } from '../types';

type ContextType = {
  meals: Meal[];
  setMeals: (value: Meal[]) => void;
};

const MealsContext = createContext({} as ContextType);

export default MealsContext;

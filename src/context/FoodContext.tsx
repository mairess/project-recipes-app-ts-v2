import { createContext } from 'react';

type ContextType = {
  email: string;
  setEmail: (filter: string) => void;
  isFormValid: boolean;
  setIsFormValid: (value: boolean) => void;
  isButtonClicked: boolean;
  handleSubmit: (mail: string, validation: boolean) => void;
  filter: string;
  handleFilterChange: ({ target }: React.ChangeEvent<HTMLInputElement>) => void;
};

const FoodContext = createContext({} as ContextType);

export default FoodContext;

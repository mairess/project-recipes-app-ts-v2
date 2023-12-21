import { createContext } from 'react';

type ContextType = {
  mail: string;
  setMail: (filter: string) => void;
  isFormValid: boolean;
  setIsFormValid: (value: boolean) => void;
  isButtonClicked: boolean;
  handleSubmit: (mail: string, validation: boolean, theRoute: string) => void;
  filter: string;
  handleFilterChange: ({ target }: React.ChangeEvent<HTMLInputElement>) => void;
  setAlertShown: (value: boolean) => void;
  alertShown: boolean;
};

const FoodContext = createContext({} as ContextType);

export default FoodContext;

import { createContext } from 'react';
import { CategoryType, DrinkCategoryType, MealCategoryType } from '../types';

type ContextType = {
  mail: string;
  setMail: (filter: string) => void;
  isFormValid: boolean;
  setIsFormValid: (value: boolean) => void;
  setIsButtonClicked: (value: boolean) => void;
  isButtonClicked: boolean;
  handleSubmit: (
    data: {
      email: string;
      validation: boolean;
      pathname: string;
      label: string;
      id: string;
    }
  ) => void;
  filter: string;
  handleFilterChange: ({ target }: React.ChangeEvent<HTMLInputElement>) => void;
  setAlertShown: (value: boolean) => void;
  alertShown: boolean;
  categoryResults: CategoryType[];
  setCategoryResults: (value: MealCategoryType[] | DrinkCategoryType[]) => void;
  handleCheckboxChange:(value: string) => void;
  checkedIngredients: string[];
  setCheckedIngredients:(value: string[]) => void;
  copyToClipboard: (value: string) => void;
  isLinkCopied: boolean;
  setCopiedIndex: (value: number) => void;
  copiedIndex: number | null | undefined;
};

const FoodContext = createContext({} as ContextType);

export default FoodContext;

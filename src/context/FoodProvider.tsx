import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { string } from 'prop-types';
import FoodContext from './FoodContext';
import { DrinkCategoryType, MealCategoryType } from '../types';

type FilterProviderProps = {
  children: React.ReactNode,
};

function FoodProvider({ children }: FilterProviderProps) {
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [mail, setMail] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);
  const navigate = useNavigate();
  const [filter, setFilter] = useState('');
  const [alertShown, setAlertShown] = useState(false);
  const [categoryResults, setCategoryResults] = useState<
  MealCategoryType[] | DrinkCategoryType[]>([]);
  const [checkedIngredients, setCheckedIngredients] = useState<string[]>([]);

  const handleNavigation = (path: string) => {
    setIsButtonClicked(false);
    navigate(path);
  };

  const handleSubmit = ({
    email,
    validation,
    pathname,
    label,
    id,
  }: {
    email: string;
    validation: boolean;
    pathname: string;
    label: string;
    id: string;
  }) => {
    if (validation) {
      setIsButtonClicked(validation);
      localStorage.setItem('user', JSON.stringify({ email }));

      setTimeout(() => {
        if (pathname === '/') {
          handleNavigation('/meals');
        } else if (pathname.includes('in-progress')) {
          handleNavigation('/done-recipes');
        } else if (label === 'Start Recipe') {
          const recipePath = pathname.includes('/meals') ? '/meals' : '/drinks';
          handleNavigation(`${recipePath}/${id}/in-progress`);
        }
        setIsButtonClicked(false);
      }, 1000);
    }
  };

  const handleFilterChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const newFilter = target.value;
    setFilter(newFilter);
  };

  const handleCheckboxChange = (ingredient: string) => {
    if (checkedIngredients.includes(ingredient)) {
      setCheckedIngredients((prevChecked) => prevChecked
        .filter((item) => item !== ingredient));
    } else {
      setCheckedIngredients((prevChecked) => [...prevChecked, ingredient]);
    }
  };

  return (
    <FoodContext.Provider
      value={ {
        mail,
        setMail,
        isFormValid,
        setIsFormValid,
        isButtonClicked,
        handleSubmit,
        filter,
        handleFilterChange,
        setAlertShown,
        alertShown,
        categoryResults,
        setCategoryResults,
        handleCheckboxChange,
        checkedIngredients,
        setCheckedIngredients,
      } }
    >
      {children}
    </FoodContext.Provider>
  );
}

export default FoodProvider;

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
          navigate('/meals');
          setIsButtonClicked(false);
        }

        if (label === 'Start Recipe') {
          if (pathname.includes('/meals')) {
            navigate(`/meals/${id}/in-progress`);
          }
          if (pathname.includes('/drinks')) {
            navigate(`/drinks/${id}/in-progress`);
          }
        }
        setIsButtonClicked(false);
      }, 1000);
    }
  };

  const handleFilterChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const newFilter = target.value;
    setFilter(newFilter);
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
      } }
    >
      {children}
    </FoodContext.Provider>
  );
}

export default FoodProvider;

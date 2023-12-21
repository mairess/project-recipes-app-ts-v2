import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FoodContext from './FoodContext';

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

  const handleSubmit = (email: string, validation: boolean, theRoute: string) => {
    if (validation) {
      setIsButtonClicked(validation);
      localStorage.setItem('user', JSON.stringify({ email }));
      setTimeout(() => {
        if (theRoute === '/') {
          navigate('/meals');
          setIsButtonClicked(false);
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
      } }
    >
      {children}
    </FoodContext.Provider>
  );
}

export default FoodProvider;

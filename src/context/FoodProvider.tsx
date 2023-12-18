import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FoodContext from './FoodContext';

type FilterProviderProps = {
  children: React.ReactNode,
};

function FoodProvider({ children }: FilterProviderProps) {
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [email, setEmail] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);
  const navigate = useNavigate();
  const [filter, setFilter] = useState('');

  const handleSubmit = (mail: string, validation: boolean) => {
    if (validation) {
      setIsButtonClicked(validation);
      localStorage.setItem('user', JSON.stringify({ mail }));
      setTimeout(() => {
        navigate('/meals');
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
        email,
        setEmail,
        isFormValid,
        setIsFormValid,
        isButtonClicked,
        handleSubmit,
        filter,
        handleFilterChange,
      } }
    >
      {children}
    </FoodContext.Provider>
  );
}

export default FoodProvider;

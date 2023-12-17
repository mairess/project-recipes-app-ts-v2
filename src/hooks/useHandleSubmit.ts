import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const useHandleSubmit = (email: string, isFormValid: boolean) => {
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (isFormValid) {
      setIsButtonClicked(true);
      localStorage.setItem('user', JSON.stringify({ email }));
      setTimeout(() => {
        navigate('/meals');
      }, 1000);
    }
  };

  return {
    isButtonClicked,
    handleSubmit,
  };
};

export default useHandleSubmit;

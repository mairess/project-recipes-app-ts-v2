import { useLocation } from 'react-router-dom';
import { useContext } from 'react';
import FoodContext from '../../context/FoodContext';
import { StyledButton, Spinner } from './style';

type ButtonProps = {
  email?: string,
  isFormValid?: boolean,
  width?: string,
  height?: string,
  margin?: string,
  showSpinner?: boolean,
};

function Button({
  email = '',
  isFormValid = true,
  width = '17.25rem',
  height = '2.5rem',
  margin = '0',
  showSpinner = true,
}: ButtonProps) {
  const { isButtonClicked, handleSubmit, setAlertShown } = useContext(FoodContext);
  const { pathname } = useLocation();
  let label = 'Enter';
  let testId = 'login-submit-btn';

  if (pathname.includes('meals') || pathname.includes('drinks')) {
    label = 'Search';
    testId = 'exec-search-btn';
  }

  return (
    <StyledButton
      data-testid={ testId }
      disabled={ !isFormValid }
      onClick={ () => {
        handleSubmit(email, isFormValid);
        setAlertShown(false);
      } }
      style={ { width, height, margin } }
    >
      {isButtonClicked && showSpinner
        ? (<Spinner />) : (label)}
    </StyledButton>
  );
}

export default Button;

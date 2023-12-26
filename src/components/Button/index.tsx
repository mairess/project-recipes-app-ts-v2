import { useLocation, useParams } from 'react-router-dom';
import { useContext } from 'react';
import isRecipeInProgress from '../../helpers/isRecipeInProgress';
import FoodContext from '../../context/FoodContext';
import { StyledButton, Spinner, Container } from './style';

type Position = 'fixed';

type ButtonProps = {
  email?: string,
  isFormValid?: boolean,
  width?: string,
  height?: string,
  margin?: string,
  showSpinner?: boolean,
  position?: Position,
  bottom?: string,
};

function Button({
  email = '',
  isFormValid = true,
  width = '17.25rem',
  height = '2.5rem',
  margin = '0',
  showSpinner = true,
  position = undefined,
  bottom = '',
}: ButtonProps) {
  const { isButtonClicked, handleSubmit, setAlertShown } = useContext(FoodContext);
  const { pathname } = useLocation();
  const { id = '' } = useParams();
  let label = 'Enter';
  let testId = 'login-submit-btn';

  console.log(pathname);

  if (pathname.includes('meals') || pathname.includes('drinks')) {
    label = 'Search';
    testId = 'exec-search-btn';
  }

  if (pathname.includes('/meals/') || pathname.includes('/drinks/')) {
    label = 'Start Recipe';
    testId = 'start-recipe-btn';
    position = 'fixed';
    bottom = '0';
  }

  if (isRecipeInProgress(id, pathname)) {
    label = 'Continue Recipe';
  }

  return (
    <Container>
      <StyledButton
        data-testid={ testId }
        disabled={ !isFormValid }
        onClick={ () => {
          handleSubmit(email, isFormValid, pathname);
          setAlertShown(false);
        } }
        style={ { width, height, margin, position, bottom } }
      >
        {isButtonClicked && showSpinner
          ? (<Spinner />) : (label)}
      </StyledButton>
    </Container>
  );
}

export default Button;

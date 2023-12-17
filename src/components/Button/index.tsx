import { useLocation } from 'react-router-dom';
import useHandleSubmit from '../../hooks/useHandleSubmit';
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
  const { isButtonClicked, handleSubmit } = useHandleSubmit(email, isFormValid);
  const { pathname } = useLocation();
  const label = pathname.includes('meals' || 'drinks') ? 'Search' : 'Enter';

  return (
    <StyledButton
      data-testid="login-submit-btn"
      disabled={ !isFormValid }
      onClick={ handleSubmit }
      style={ { width, height, margin } }
    >
      {isButtonClicked && showSpinner
        ? (<Spinner />) : (label)}
    </StyledButton>
  );
}

export default Button;

import { useLocation } from 'react-router-dom';
import useHandleSubmit from '../../hooks/useHandleSubmit';
import { StyledButton, Spinner } from './style';

type ButtonProps = {
  email: string,
  isFormValid: boolean,
};

function Button({ email, isFormValid }: ButtonProps) {
  const { isButtonClicked, handleSubmit } = useHandleSubmit(email, isFormValid);
  const { pathname } = useLocation();
  const label = pathname.includes('meals' || 'drinks') ? 'Search' : 'Enter';

  return (
    <StyledButton
      data-testid="login-submit-btn"
      disabled={ !isFormValid }
      onClick={ handleSubmit }
    >
      {isButtonClicked ? <Spinner /> : label}
    </StyledButton>
  );
}

export default Button;

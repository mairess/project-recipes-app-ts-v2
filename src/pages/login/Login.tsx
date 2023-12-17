import useHandleSubmit from '../../hooks/useHandleSubmit';
import useHandleChange from '../../hooks/useHandleChange';
import logo from '../../images/logo-Recipes-App.svg';
import { Container, LogoRecipes, Img, Inputs, Button, Spinner } from './style';

function Login() {
  const {
    email,
    isFormValid,
    handleEmailChange,
    handlePasswordChange,
  } = useHandleChange();
  const { isButtonClicked, handleSubmit } = useHandleSubmit(email, isFormValid);

  return (
    <Container>
      <LogoRecipes>
        <Img src={ logo } alt="recipes app logo" />
      </LogoRecipes>
      <Inputs>
        <h1>Login</h1>
        <input
          placeholder="Email"
          type="email"
          data-testid="email-input"
          onChange={ handleEmailChange }
        />

        <input
          placeholder="Password"
          type="password"
          data-testid="password-input"
          onChange={ handlePasswordChange }
        />

        <Button
          data-testid="login-submit-btn"
          disabled={ !isFormValid }
          onClick={ handleSubmit }
        >
          {isButtonClicked ? <Spinner /> : 'Enter'}
        </Button>
      </Inputs>
    </Container>
  );
}

export default Login;

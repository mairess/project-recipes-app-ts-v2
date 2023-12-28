import { useLocation } from 'react-router-dom';
import Testing from '../../components/Testing';
import usePageTitle from '../../hooks/usePageTitle';
import useHandleChange from '../../hooks/useHandleChange';
import logo from '../../images/logo-Recipes-App.svg';
import { Container, LogoRecipes, Img, Inputs } from './style';

function Login() {
  const { email, isFormValid, handleEmailChange, handlePasswordChange,
  } = useHandleChange();
  const { pathname } = useLocation();
  const { data: { title } } = usePageTitle(pathname);

  return (
    <Container>
      <LogoRecipes>
        <Img src={ logo } alt="recipes app logo" />
      </LogoRecipes>
      <Inputs>
        <h1>{title}</h1>
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
        <Testing
          buttonConfig={ {
            disabled: isFormValid,
            email,
          } }
        />
      </Inputs>
    </Container>
  );
}

export default Login;

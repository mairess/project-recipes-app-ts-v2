import logo from '../../images/logo-Recipes-App.svg';
import { Container, LogoRecipes, Img, Inputs, Button } from './style';

function Login() {
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
        />

        <input
          placeholder="Password"
          type="password"
          data-testid="password-input"
        />

        <Button
          data-testid="login-submit-btn"
        >
          Enter
        </Button>
      </Inputs>
    </Container>
  );
}

export default Login;

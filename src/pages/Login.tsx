import styled, { keyframes } from 'styled-components';
import logo from '../images/logo-Recipes-App.svg';
import tomato from '../images/tomate.png';

const Img = styled.img`
    filter: drop-shadow(0.786px 13.357px 10.214px rgba(33, 18, 55, 0.20));
`;

const Container = styled.div`
    background-image: url(${tomato});
    background-position: 50%;
    background-repeat: no-repeat;
    height: 100vh;

    input {
        width: 17.25rem;
        height: 2.5rem;
        flex-shrink: 0;
        text-indent: 1rem;
        border-radius: 0.3125rem;
        border: 0.5px solid #41197F;
        color: #41197F;
        font-size: 0.875rem;
        font-style: normal;
        font-weight: 300;
        line-height: normal;
    }

    ::placeholder {
        color: #41197F;
        font-size: 0.875rem;
        text-indent: 1rem;
    }
`;

const LogoRecipes = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    background: #41197F;

    height: 22.375rem;
    flex-shrink: 0;
    z-index: -1;

    img {
        width: 12.375rem;
        height: 9.82813rem;
        flex-shrink: 0;
        margin-top: 1.25rem;
    }
`;

const Inputs = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 1px;
    gap: 0.5rem;
    margin-top: 80px;

    h1 {
        color: #41197F;
        text-align: center;
        font-size: 1.25rem;
        font-style: italic;
        font-weight: 500;
        line-height: normal;
        letter-spacing: 0.20625rem;
        text-transform: uppercase;
    }
`;

const animateButton = keyframes`
    0% { transform: scale(1); }
    50% { transform: scale(1.1); }
    100% { transform: scale(1); }
`;

const Button = styled.button`
    width: 17.25rem;
    height: 2.5rem;
    flex-shrink: 0;

    border-radius: 0.3125rem;
    background: #FCC436;
    border: none;

    color: #FFF;
    text-align: center;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 0.02625rem;
    text-transform: uppercase;

    &:active {
        animation: ${animateButton} 300ms ease-out;
    }
`;

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

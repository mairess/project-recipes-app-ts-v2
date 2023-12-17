import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../images/logo-Recipes-App.svg';
import { Container, LogoRecipes, Img, Inputs, Button, Spinner } from './style';

function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: '', password: '' });
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const { email, password } = form;

  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isPasswordValid = /^[^\s]{7,}$/.test(password);
  const isFormValid = isEmailValid && isPasswordValid;

  const handleEmailChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const newMail = target.value;
    setForm({ ...form, email: newMail });
  };

  const handlePasswordChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = target.value;
    setForm({ ...form, password: newPassword });
  };

  const handleSubmit = () => {
    if (isFormValid) {
      setIsButtonClicked(true);
      localStorage.setItem('user', JSON.stringify({ email }));
      setTimeout(() => {
        navigate('/meals');
      }, 1000);
    }
  };

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

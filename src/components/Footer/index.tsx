import { useNavigate } from 'react-router-dom';
import drinkIcon from '../../images/drinkIcon.svg';
import mealIcon from '../../images/mealIcon.svg';
import { Button, Container } from './style';

function Footer() {
  const navigate = useNavigate();
  return (
    <Container data-testid="footer">
      <Button
        onClick={ () => navigate('/drinks') }
      >
        <img
          data-testid="drinks-bottom-btn"
          src={ drinkIcon }
          alt="Drink icon"
        />
      </Button>
      <Button
        onClick={ () => navigate('/meals') }
      >
        <img
          data-testid="meals-bottom-btn"
          src={ mealIcon }
          alt="Meal icon"
        />
      </Button>
    </Container>
  );
}

export default Footer;

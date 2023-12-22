import { useLocation } from 'react-router-dom';
import { Container, WrapperButton, Button, Div } from './style';
import {
  allMealsIcon,
  beefIcon,
  goatIcon,
  chickenIcon,
  breakfastIcon,
  dessertIcon,
  allDrinks,
  ordinaryDrink,
  cocktailIcon,
  shakeIcon,
  unknownIcon,
  cocoaIcon,
} from './icons';

function MealsFilterBar() {
  const { pathname } = useLocation();
  const routeValidation = pathname === '/meals';

  return (
    <Container>
      <Div>
        <WrapperButton>
          <Button>
            <img
              src={ routeValidation ? allMealsIcon : allDrinks }
              alt={ routeValidation ? 'All meals' : 'All drinks' }
            />
          </Button>
        </WrapperButton>
        <p>All</p>
      </Div>
      <Div>
        <WrapperButton>
          <Button>
            <img
              src={ routeValidation ? beefIcon : ordinaryDrink }
              alt={ routeValidation ? 'Beef' : 'Ordinary Drink' }
            />
          </Button>
        </WrapperButton>
        <p>Beef</p>
      </Div>
      <Div>
        <WrapperButton>
          <Button>
            <img
              src={ routeValidation ? goatIcon : cocktailIcon }
              alt={ routeValidation ? 'Goat' : 'Cocktail' }
            />
          </Button>
        </WrapperButton>
        <p>Goat</p>
      </Div>
      <Div>
        <WrapperButton>
          <Button>
            <img
              src={ routeValidation ? chickenIcon : shakeIcon }
              alt={ routeValidation ? 'Chicken' : 'Shake' }
            />
          </Button>
        </WrapperButton>
        <p>Chicken</p>
      </Div>
      <Div>
        <WrapperButton>
          <Button>
            <img
              src={ routeValidation ? breakfastIcon : unknownIcon }
              alt={ routeValidation ? 'Breakfast' : 'Other / Unknown' }
            />
          </Button>
        </WrapperButton>
        <p>Breakfast</p>
      </Div>
      <Div>
        <WrapperButton>
          <Button>
            <img
              src={ routeValidation ? dessertIcon : cocoaIcon }
              alt={ routeValidation ? 'Dessert' : 'Cocoa' }
            />
          </Button>
        </WrapperButton>
        <p>Dessert</p>
      </Div>
    </Container>
  );
}

export default MealsFilterBar;

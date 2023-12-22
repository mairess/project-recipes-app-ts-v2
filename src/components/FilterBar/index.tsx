import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { CategoryType } from '../../types';
import fetchCategories from '../../services/fetchCategories';
import { Container, WrapperButton, Button, Div } from './style';
import getTheIcon from './icons';

function FilterBar() {
  const [categories, setCategories] = useState<CategoryType[]>([]);
  const { pathname } = useLocation();
  const routeValidation = pathname === '/meals';

  useEffect(() => {
    const getTheCategories = async () => {
      try {
        const theCategories = await fetchCategories(pathname);
        setCategories(theCategories);
      } catch (error) {
        console.error(error);
      }
    };
    getTheCategories();
  }, [pathname]);

  return (
    <Container>
      <Div>
        <WrapperButton>
          <Button>
            <img
              src={ routeValidation ? getTheIcon('iconMeal') : getTheIcon('iconDrink') }
              alt={ routeValidation ? 'All meals' : 'All drinks' }
            />
          </Button>
        </WrapperButton>
        <p>All</p>
      </Div>
      {categories && categories.map((category) => (
        <Div key={ category.strCategory }>
          <WrapperButton>
            <Button
              data-testid={ `${category.strCategory}-category-filter` }
            >
              <img
                src={ getTheIcon(category.strCategory) }
                alt="asd"
              />
            </Button>
          </WrapperButton>
          <p>{category.strCategory}</p>
        </Div>
      ))}
      {/* <Div>
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
      </Div> */}
    </Container>
  );
}

export default FilterBar;

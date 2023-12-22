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
                alt={ category.strCategory }
              />
            </Button>
          </WrapperButton>
          <p>{category.strCategory}</p>
        </Div>
      ))}
    </Container>
  );
}

export default FilterBar;

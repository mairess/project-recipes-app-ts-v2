import { useLocation } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import FoodContext from '../../context/FoodContext';
import fetchCategory from '../../services/fetchCategory';
import { CategoriesType } from '../../types';
import fetchCategories from '../../services/fetchCategories';
import { Container, WrapperButton, Button, Div } from './style';
import getTheIcon from './icons';

function FilterBar() {
  const [categories, setCategories] = useState<CategoriesType[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [filterCategoryClicked, setFilterCategoryClicked] = useState(true);
  const { setCategoryResults } = useContext(FoodContext);
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

  const handleCategoryClick = (category: string) => {
    setFilterCategoryClicked((prevState) => !prevState);
    setSelectedCategory(filterCategoryClicked ? category : 'All');

    if (!filterCategoryClicked) {
      setCategoryResults([]);
    }
  };

  useEffect(() => {
    const getTheCategory = async () => {
      if (selectedCategory) {
        try {
          const data = await fetchCategory(pathname, selectedCategory);
          setCategoryResults(data);
        } catch (error) {
          console.error(error);
        }
      }
    };
    getTheCategory();
  }, [pathname, selectedCategory]);

  return (
    <Container>
      <Div>
        <WrapperButton>
          <Button
            onClick={ () => handleCategoryClick('All') }
            data-testid="All-category-filter"
          >
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
              onClick={ () => handleCategoryClick(category.strCategory) }
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

import { useContext } from 'react';
import FoodContext from '../../context/FoodContext';
import { WrapperButton, Div, Button, Container } from './style';
import getTheIcon from '../../helpers/icons';

function FilterBarDoneAdnFavorites() {
  const { setFilterDone } = useContext(FoodContext);
  const filters = ['All', 'Meals', 'Drinks'];

  const handleFilterClick = (selectedFilter: string) => {
    setFilterDone(selectedFilter);
  };

  return (
    <Container>
      {filters.map((filter) => (
        <Div key={ filter }>
          <WrapperButton>
            <Button
              onClick={ () => handleFilterClick(filter) }
              type="submit"
              data-testid={ filter === 'All'
                ? `filter-by-${filter.toLocaleLowerCase()}-btn`
                : `filter-by-${filter.toLocaleLowerCase().slice(0, -1)}-btn` }
            >
              <img
                src={ getTheIcon.toFilterBarDoneAndFavRecipes(filter) }
                alt={ filter }
              />
            </Button>
          </WrapperButton>
          <p>{filter}</p>
        </Div>
      ))}
    </Container>
  );
}

export default FilterBarDoneAdnFavorites;

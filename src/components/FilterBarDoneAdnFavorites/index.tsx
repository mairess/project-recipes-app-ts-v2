import { WrapperButton, Div, Button, Container } from './style';
import getTheIcon from '../../helpers/icons';

function FilterBarDoneAdnFavorites() {
  const filters = ['All', 'Meals', 'Drinks'];
  return (
    <Container>
      {filters.map((filter) => (
        <Div key={ filter }>
          <WrapperButton>
            <Button
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

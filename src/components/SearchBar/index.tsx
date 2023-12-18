import { useContext } from 'react';
import FoodContext from '../../context/FoodContext';
import useFetchMeals from '../../hooks/useFetchMeals';
import useHandleChange from '../../hooks/useHandleChange';
import {
  Container,
  SearchInput,
  WrapperRadios,
} from './style';
import Button from '../Button';

function SearchBar() {
  const { handleSearchTerm, searchTerm } = useHandleChange();
  const { handleFilterChange } = useContext(FoodContext);
  const { endpoint } = useFetchMeals(searchTerm);

  return (
    <Container>
      <SearchInput
        type="text"
        data-testid="search-input"
        placeholder="Search"
        onChange={ handleSearchTerm }
      />
      <WrapperRadios>
        <label htmlFor="ingredient">
          <input
            name="searchType"
            value="Ingredient"
            id="ingredient"
            type="radio"
            data-testid="ingredient-search-radio"
            onChange={ handleFilterChange }
          />
          Ingredient
        </label>
        <label htmlFor="name">
          <input
            name="searchType"
            value="Name"
            id="name"
            data-testid="name-search-radio"
            type="radio"
            onChange={ handleFilterChange }
          />
          Name
        </label>
        <label htmlFor="firstLetter">
          <input
            name="searchType"
            value="First Letter"
            id="firstLetter"
            data-testid="first-letter-search-radio"
            type="radio"
            onChange={ handleFilterChange }
          />
          First letter
        </label>
      </WrapperRadios>

      <Button
        width="13.00994rem"
        height="1.5625rem"
        margin="1rem"
        showSpinner={ false }
      />
    </Container>
  );
}

export default SearchBar;

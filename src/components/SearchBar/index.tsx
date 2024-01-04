import { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { SearchTermContext } from '../../context/SearchTermContext';
import FoodContext from '../../context/FoodContext';
import { Container, SearchInput, WrapperRadios } from './style';
import Button from '../Button';

function SearchBar() {
  const { handleFilterChange } = useContext(FoodContext);
  const { handleSearchTerm, searchTerm } = useContext(SearchTermContext);
  const { pathname } = useLocation();

  const style = {
    width: '13.00994rem',
    height: '1.5625rem',
    margin: '1rem',
  };

  return (
    <Container>
      <SearchInput
        value={ searchTerm }
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
        buttonConfig={ {
          pathname,
          style,
        } }
      />
    </Container>
  );
}

export default SearchBar;

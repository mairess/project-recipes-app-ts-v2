import {
  Container,
  SearchInput,
  WrapperRadios,
} from './style';
import Button from '../Button';

function SearchBar() {
  return (
    <Container>
      <SearchInput
        type="text"
        data-testid="search-input"
        placeholder="Search"
      />
      <WrapperRadios>
        <label htmlFor="ingredient">
          <input
            name="searchType"
            id="ingredient"
            type="radio"
            data-testid="ingredient-search-radio"
          />
          Ingredient
        </label>
        <label htmlFor="name">
          <input
            name="searchType"
            id="name"
            data-testid="name-search-radio"
            type="radio"
          />
          Name
        </label>
        <label htmlFor="firstLetter">
          <input
            name="searchType"
            id="firstLetter"
            data-testid="first-letter-search-radio"
            type="radio"
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

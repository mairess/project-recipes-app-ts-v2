import { Container } from './style';
import Button from '../Button';

function SearchBar() {
  return (
    <Container>
      <input
        type="text"
        data-testid="search-input"
      />
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

import { Container } from './style';
import Button from '../Button';

function SearchBar() {
  return (
    <Container>
      <input
        type="text"
        data-testid="search-input"
      />
      <Button />
    </Container>
  );
}

export default SearchBar;

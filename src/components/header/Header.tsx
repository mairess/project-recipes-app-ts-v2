import { Link, useLocation } from 'react-router-dom';
import profileIcon from '../../images/profileIcon.svg';
import searchIcon from '../../images/searchIcon.svg';
import usePageTitle from '../../hooks/usePageTitle';
import logoBell from '../../images/icon-Bell.svg';
import logoText from '../../images/icon-text.svg';
import iconPlate from '../../images/icon-plate.svg';
import { Container, Title, WrapperTitle } from './style';

function Header() {
  const { pathname } = useLocation();
  const { title } = usePageTitle(pathname);
  return (
    <div>
      <Container>
        <div>
          <img
            src={ logoBell }
            alt="Logo bell"
            width="42.6"
            height="39.2"
          />
          <img src={ logoText } alt="Logo text" />
        </div>
        <div>
          <Link to="/profile">
            <img
              src={ profileIcon }
              data-testid="profile-top-btn"
              alt="Profile Icon"
              width="28.71"
              height="28.71"
            />
          </Link>
          {(title === 'Meals' || title === 'Drinks') && (
            <img
              src={ searchIcon }
              data-testid="search-top-btn"
              alt="Search Icon"
              width="26.8"
              height="26.8"
            />
          )}
        </div>
      </Container>

      <WrapperTitle>
        <img
          src={ iconPlate }
          alt="Icon plate"
        />
        <Title data-testid="page-title">
          {title}
        </Title>
      </WrapperTitle>
    </div>
  );
}

export default Header;

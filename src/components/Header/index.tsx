import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import profileIcon from '../../images/profileIcon.svg';
import searchIcon from '../../images/searchIcon.svg';
import usePageTitle from '../../hooks/usePageTitle';
import logoBell from '../../images/icon-Bell.svg';
import logoText from '../../images/icon-text.svg';
import { Container, WrapperTop, Title, WrapperTitle } from './style';
import SearchBar from '../SearchBar';

function Header() {
  const [showSearchBar, SetShowSearchBar] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { data } = usePageTitle(pathname);
  const { title, icon } = data;

  return (
    <Container>
      <WrapperTop>
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
          <button
            onClick={ () => navigate('/profile') }
          >
            <img
              src={ profileIcon }
              data-testid="profile-top-btn"
              alt="Profile Icon"
              width="28.71"
              height="28.71"
            />
          </button>
          {(title === 'Meals' || title === 'Drinks') && (
            <button
              onClick={ () => SetShowSearchBar((prevState) => !prevState) }
            >
              <img
                src={ searchIcon }
                data-testid="search-top-btn"
                alt="Search Icon"
                width="26.8"
                height="26.8"
              />
            </button>
          )}
        </div>
      </WrapperTop>

      <WrapperTitle>
        <img
          src={ icon }
          alt="Icon plate"
        />
        <Title data-testid="page-title">
          {title}
        </Title>
      </WrapperTitle>
      {showSearchBar && <SearchBar />}
    </Container>
  );
}

export default Header;

import { useLocation } from 'react-router-dom';
import profileIcon from '../../images/profileIcon.svg';
import searchIcon from '../../images/searchIcon.svg';

function Header() {
  const { pathname } = useLocation();
  return (
    <div>
      <img
        src={ profileIcon }
        data-testid="profile-top-btn"
        alt="Profile Icon"
        width="31"
        height="31"
      />

      <img
        src={ searchIcon }
        data-testid="search-top-btn"
        alt="S earch Icon"
        width="31"
        height="31"
      />

      <h1 data-testid="page-title">
        {pathname.charAt(1).toLocaleUpperCase() + pathname.slice(2)}
      </h1>
    </div>
  );
}

export default Header;

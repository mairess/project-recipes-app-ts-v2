import { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import FoodContext from '../../context/FoodContext';
import shareIcon from '../../images/shareIcon.svg';
import { Button } from './style';

type ButtonShareProps = {
  recipeId?: string,
  type?: string,
  index?: number
};

function ButtonShare({ recipeId = '', type = '', index = 0 }: ButtonShareProps) {
  const { copyToClipboard, setCopiedIndex } = useContext(FoodContext);
  const currentUrl = window.location.origin;
  const { pathname } = useLocation();

  const handleShareClick = (theIndex: number) => {
    const shareLink = `${currentUrl}/${type}s/${recipeId}`;
    copyToClipboard(shareLink);
    setCopiedIndex(theIndex);
  };

  return (
    <div>
      <Button
        onClick={ () => handleShareClick(index) }
      >
        <img
          data-testid={ pathname === '/done-recipes' || pathname === '/favorite-recipes'
            ? `${index}-horizontal-share-btn`
            : 'share-btn' }
          src={ shareIcon }
          alt="Share icon"
        />
      </Button>
    </div>
  );
}

export default ButtonShare;

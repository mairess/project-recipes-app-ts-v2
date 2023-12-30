import { useContext } from 'react';
import FoodContext from '../../context/FoodContext';
import shareIcon from '../../images/shareIcon.svg';
import { Button } from './style';

type ButtonShareProps = {
  recipeId?: string,
  type?: string
};

function ButtonShare({ recipeId = '', type = '' }: ButtonShareProps) {
  const { copyToClipboard } = useContext(FoodContext);
  const currentUrl = window.location.origin;

  const handleShareClick = () => {
    const shareLink = `${currentUrl}/${type}s/${recipeId}`;
    copyToClipboard(shareLink);
  };
  return (
    <div>
      <Button
        onClick={ handleShareClick }
      >
        <img
          data-testid="share-btn"
          src={ shareIcon }
          alt="Share icon"
        />
      </Button>
    </div>
  );
}

export default ButtonShare;

import useCopyToClipBoard from '../../hooks/useCopyToClipboard';
import shareIcon from '../../images/shareIcon.svg';

function ButtonShare() {
  const { handCopyToleClipboard } = useCopyToClipBoard();
  return (
    <div>
      <button
        onClick={ handCopyToleClipboard }
      >
        <img
          data-testid="share-btn"
          src={ shareIcon }
          alt="Share icon"
        />
      </button>
    </div>
  );
}

export default ButtonShare;

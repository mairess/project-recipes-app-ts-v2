import { useState } from 'react';

function useCopyToClipBoard() {
  const [isLinkCopied, setIsLinkCopied] = useState(false);

  const handCopyToleClipboard = () => {
    setIsLinkCopied(true);
    navigator.clipboard.writeText(window.location.href);

    setTimeout(() => {
      setIsLinkCopied(false);
    }, 2000);
  };

  return { isLinkCopied, handCopyToleClipboard };
}

export default useCopyToClipBoard;

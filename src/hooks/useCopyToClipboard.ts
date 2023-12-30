import { useState } from 'react';

function useCopyToClipBoard() {
  const [isLinkCopied, setIsLinkCopied] = useState(false);

  const copyToClipboard = () => {
    const currentUrl = window.location.href;
    const trimmedUrl = currentUrl.slice(0, currentUrl.lastIndexOf('/'));

    setIsLinkCopied(true);
    if (currentUrl.includes('in-progress')) {
      navigator.clipboard.writeText(trimmedUrl);
    } else {
      navigator.clipboard.writeText(window.location.href);
    }
    setTimeout(() => {
      setIsLinkCopied(false);
    }, 2000);
  };

  return { isLinkCopied, copyToClipboard };
}

export default useCopyToClipBoard;

import isRecipeInProgress from './isRecipeInProgress';

const getTheLabel = (thePath: string, theId?: string) => {
  let label;
  if (thePath === '/') {
    label = 'Enter';
    return label;
  }
  const isInprogress = thePath.split('/')[3];

  if (thePath === '/meals' || thePath === '/drinks') {
    label = 'Search';
    return label;
  }

  if ((thePath.includes('/meals/')
  || thePath.includes('/drinks/'))
  && theId !== undefined) {
    if (isInprogress) {
      label = 'Finish Recipe';
      return label;
    }
    const isInProgress = isRecipeInProgress(theId, thePath);

    label = isInProgress ? 'Continue Recipe' : 'Start Recipe';
    return label;
  }
};

export default getTheLabel;

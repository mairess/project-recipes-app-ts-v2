const getTestId = (thePath: string) => {
  let id: string;
  if (thePath === '/') {
    id = 'login-submit-btn';
    return id;
  }

  if (thePath === '/meals' || thePath === '/drinks') {
    id = 'exec-search-btn';
    return id;
  }

  if ((thePath.includes('/meals/')
  || thePath.includes('/drinks/')) && !thePath.includes('/in-progress')) {
    id = 'start-recipe-btn';
    return id;
  }

  if (thePath.includes('in-progress')) {
    id = 'finish-recipe-btn';
    return id;
  }
};

export default getTestId;

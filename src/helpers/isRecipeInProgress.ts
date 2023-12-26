const isRecipeInProgress = (theId: string, theRoute: string) => {
  const storedRecipes = localStorage.getItem('inProgressRecipes');
  const inProgressRecipes = storedRecipes ? JSON
    .parse(storedRecipes) : { meals: { }, drinks: { } };

  if (theRoute.includes('/drinks')) {
    return Object.keys(inProgressRecipes.drinks).some((item) => item === theId);
  }

  if (theRoute.includes('/meals')) {
    return Object.keys(inProgressRecipes.meals).some((item) => item === theId);
  }
};

export default isRecipeInProgress;

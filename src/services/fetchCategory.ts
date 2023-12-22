const fetchCategory = async (theRoute: string, filterCategory: string) => {
  const mealsUrl = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${filterCategory}`;
  const drinksUrl = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${filterCategory}`;

  const AllMealsUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
  const allDrinksUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

  const routeValidation = theRoute === '/meals';

  let url = routeValidation ? mealsUrl : drinksUrl;

  if (filterCategory === 'All' && routeValidation) {
    url = AllMealsUrl;
  } else if (filterCategory === 'All' && !routeValidation) {
    url = allDrinksUrl;
  }

  try {
    const response = await fetch(url);
    const data = await response.json();
    const { meals, drinks } = data;
    return routeValidation ? meals.slice(0, 12) : drinks.slice(0, 12);
  } catch (error) {
    console.error(error);
  }
};

export default fetchCategory;

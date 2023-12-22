const fetchCategory = async (theRoute: string, filterCategory: string) => {
  const mealsUrl = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${filterCategory}`;
  const drinksUrl = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${filterCategory}`;
  const routeValidation = theRoute === '/meals';

  const url = routeValidation ? mealsUrl : drinksUrl;

  try {
    const response = await fetch(url);
    const data = await response.json();
    const { meals, drinks } = data;
    return routeValidation ? meals : drinks;
  } catch (error) {
    console.error(error);
  }
};

export default fetchCategory;

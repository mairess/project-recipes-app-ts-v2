const fetchCategories = async (route: string) => {
  const urlMeals = 'https://www.themealdb.com/api/json/v1/1/list.php?c=list';
  const urlDrinks = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
  const routeValidation = route === '/meals';

  const url = routeValidation ? urlMeals : urlDrinks;

  try {
    const response = await fetch(url);
    const data = await response.json();
    const { meals, drinks } = data;
    console.log(meals);
    console.log(drinks);

    return routeValidation ? meals.slice(0, 5) : drinks.slice(0, 5);
  } catch (error) {
    console.error(error);
  }
};

export default fetchCategories;

const fetchDetails = async (theId: string, theRoute: string) => {
  const mealsDetailsUrl = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${theId}`;
  const drinksDetailsUrl = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${theId}`;

  let endpoint;

  const validation = theRoute.includes('/meals');

  switch (validation) {
    case true:
      endpoint = mealsDetailsUrl;
      break;
    default:
      endpoint = drinksDetailsUrl;
      break;
  }

  try {
    const response = await fetch(endpoint);
    const data = await response.json();
    const { meals, drinks } = data;

    return validation ? meals : drinks;
  } catch (error) {
    console.error(error);
  }
};

export default fetchDetails;

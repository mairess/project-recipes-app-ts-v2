const fetchDefault = async (pagePath: string) => {
  if (pagePath === '/meals') {
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
    const data = await response.json();
    const { meals } = data;
    return meals;
  }

  if (pagePath === '/drinks') {
    const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');
    const data = await response.json();
    const { drinks } = data;
    return drinks;
  }
};

export default fetchDefault;

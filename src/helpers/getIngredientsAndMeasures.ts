function getIngredientsAndMeasures(recipe: any) {
  const rawData = [];
  let i = 1;
  while (recipe[`strIngredient${i}`] && recipe[`strMeasure${i}`]) {
    rawData.push({
      ingredient: recipe[`strIngredient${i}`], measure: recipe[`strMeasure${i}`],
    });
    i++;
  }
  const ingredients = rawData.map((item) => `${item.ingredient} - ${item.measure}`);
  return ingredients;
}

export default getIngredientsAndMeasures;

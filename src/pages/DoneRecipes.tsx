import CardDoneAndFavoriteRecipes from '../components/CardDoneAndFavoriteRecipes';
import FilterBarDoneAdnFavorites from '../components/FilterBarDoneAdnFavorites';

function DoneRecipes() {
  return (
    <>
      <FilterBarDoneAdnFavorites />
      <CardDoneAndFavoriteRecipes />
    </>
  );
}

export default DoneRecipes;

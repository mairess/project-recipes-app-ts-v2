import CardDoneAndFavoriteRecipes from '../components/CardDoneAndFavoriteRecipes';
import FilterBarDoneAdnFavorites from '../components/FilterBarDoneAndFavorites';

function DoneRecipes() {
  return (
    <>
      <FilterBarDoneAdnFavorites />
      <CardDoneAndFavoriteRecipes />
    </>
  );
}

export default DoneRecipes;

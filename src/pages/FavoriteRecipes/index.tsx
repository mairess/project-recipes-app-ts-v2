import CardDoneAndFavoriteRecipes from '../../components/CardDoneAndFavoriteRecipes';
import FilterBarDoneAndFavorites from '../../components/FilterBarDoneAndFavorites';

function FavoriteRecipes() {
  return (
    <>
      <FilterBarDoneAndFavorites />
      <CardDoneAndFavoriteRecipes />
    </>
  );
}

export default FavoriteRecipes;

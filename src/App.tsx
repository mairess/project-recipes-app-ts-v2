import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import { Login, Meals, Drinks, RecipeDetails, RecipeInProgress, Profile, DoneRecipes,
  FavoriteRecipes } from './index';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Login /> } />
      <Route element={ <Header /> }>
        <Route path="/meals" element={ <Meals /> } />
        <Route path="/drinks" element={ <Drinks /> } />
        <Route path="/profile" element={ <Profile /> } />
        <Route path="/done-recipes" element={ <DoneRecipes /> } />
        <Route path="/favorite-recipes" element={ <FavoriteRecipes /> } />
      </Route>
      <Route path="/meals:id-da-receita" element={ <RecipeDetails /> } />
      <Route path="/drinks:id-da-receita" element={ <RecipeDetails /> } />
      <Route path="/meals:id-da-receita/in-progress" element={ <RecipeInProgress /> } />
      <Route path="/drinks:id-da-receita/in-progress" element={ <RecipeInProgress /> } />
    </Routes>
  );
}

export default App;

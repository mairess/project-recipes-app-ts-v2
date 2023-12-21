import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import fetchDrinks from '../services/fetchDrinks';
import FoodContext from '../context/FoodContext';
import { SearchTermContext } from '../context/SearchTermContext';

function Drinks() {
  const [theDrinks, setTheDrinks] = useState([]);
  const { isButtonClicked, alertShown, setAlertShown } = useContext(FoodContext);
  const { searchTerm } = useContext(SearchTermContext);
  const { filter } = useContext(FoodContext);
  const navigate = useNavigate();

  useEffect(() => {
    const getTheDrinks = async () => {
      const drinks = await fetchDrinks(searchTerm, filter);
      setTheDrinks(drinks);
    };
    getTheDrinks();
  }, [searchTerm, isButtonClicked]);

  useEffect(() => {
    if (theDrinks && theDrinks.length === 1 && isButtonClicked) {
      const [obj] = theDrinks;
      const { idDrink } = obj;

      navigate(`/drinks/${idDrink}`);
    }
  }, [isButtonClicked]);

  useEffect(() => {
    if (filter === 'First Letter' && searchTerm.length > 1 && !alertShown) {
      setAlertShown(true);
      alert('Your search must have only 1 (one) character');
    }
  }, [isButtonClicked]);

  return (
    <h1>Drinks</h1>
  );
}

export default Drinks;

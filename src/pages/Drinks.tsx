import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Drink } from '../types';
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
      try {
        const drinks = await fetchDrinks(searchTerm, filter);
        setTheDrinks(drinks);
        const [obj] = drinks;
        const { idDrink } = obj;
        if (drinks.length === 1) {
          navigate(`/drinks/${idDrink}`);
        }
      } catch (error) {
        if (isButtonClicked) {
          setAlertShown(true);
          alert("Sorry, we haven't found any recipes for these filters.");
        }
        console.error(error);
      }
    };
    getTheDrinks();
  }, [isButtonClicked]);

  useEffect(() => {
    if (filter === 'First Letter' && searchTerm.length > 1 && !alertShown) {
      setAlertShown(true);
      alert('Your search must have only 1 (one) character');
    }
  }, [isButtonClicked]);

  return (
    <div>
      {theDrinks && theDrinks.slice(0, 12).map((drink: Drink, index: number) => (
        <div
          data-testid={ `${index}-recipe-card` }
          key={ drink.idDrink }
        >
          <h1
            data-testid={ `${index}-card-name` }
          >
            {drink.strDrink}
          </h1>
          <img
            data-testid={ `${index}-card-img` }
            style={ { width: '163.34608px', height: '134.85408px' } }
            src={ drink.strDrinkThumb }
            alt={ drink.strDrink }
          />
        </div>
      ))}
    </div>
  );
}

export default Drinks;

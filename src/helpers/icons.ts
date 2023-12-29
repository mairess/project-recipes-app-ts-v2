import allMealsIcon from '../images/allMealsIcon.svg';
import beefIcon from '../images/beefIcon.svg';
import goatIcon from '../images/goatIcon.svg';
import chickenIcon from '../images/chickenIcon.svg';
import breakfastIcon from '../images/breakfastIcon.svg';
import dessertIcon from '../images/dessertIcon.svg';
import allDrinksIcon from '../images/allDrinksIcon.svg';
import ordinaryDrink from '../images/ordinaryDrinkIcon.svg';
import cocktailIcon from '../images/cocktailIcon.svg';
import shakeIcon from '../images/shakeIcon.svg';
import unknownIcon from '../images/otherUnknownIcon.svg';
import cocoaIcon from '../images/cocoaIcon.svg';
import burgerIcon from '../images/burgerIcon.svg';

function toFilterBar(category:string) {
  let icon;

  switch (category) {
    case 'Ordinary Drink':
      icon = ordinaryDrink;
      break;
    case 'Cocktail':
      icon = cocktailIcon;
      break;
    case 'Shake':
      icon = shakeIcon;
      break;
    case 'Other / Unknown':
      icon = unknownIcon;
      break;
    case 'Cocoa':
      icon = cocoaIcon;
      break;
    case 'Beef':
      icon = beefIcon;
      break;
    case 'Goat':
      icon = goatIcon;
      break;
    case 'Breakfast':
      icon = breakfastIcon;
      break;
    case 'Chicken':
      icon = chickenIcon;
      break;
    case 'Dessert':
      icon = dessertIcon;
      break;
    case 'iconMeal':
      icon = allMealsIcon;
      break;
    case 'iconDrink':
      icon = allDrinksIcon;
      break;
    default:
      icon = dessertIcon;
      break;
  }

  return icon;
}

function toFilterBarDoneAndFavRecipes(category:string) {
  let icon;

  switch (category) {
    case 'All':
      icon = burgerIcon;
      break;
    case 'Food':
      icon = allMealsIcon;
      break;
    case 'Drinks':
      icon = allDrinksIcon;
      break;
    default:
      icon = burgerIcon;
      break;
  }

  return icon;
}

export default {
  toFilterBar,
  toFilterBarDoneAndFavRecipes,
};

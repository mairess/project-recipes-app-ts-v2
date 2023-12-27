import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { DrinkType, MealType } from '../../types';
import formDoneRecipe from '../../helpers/formDoneRecipe';
import { StyledButton, Spinner, Container } from './style';

type ButtonProps = {
  recipe: MealType[] | DrinkType[];
  validationToIngredients?: boolean,
};

function ButtonFinishRecipe({
  recipe,
  validationToIngredients = true,
}: ButtonProps) {
  const { pathname } = useLocation();
  const label = 'Finish Recipe';
  const [showSpinner, setShowSpinner] = useState(false);
  const navigate = useNavigate();

  const handleSaveDoneRecipe = () => {
    setShowSpinner(true);
    if (pathname.includes('in-progress') && label === 'Finish Recipe') {
      const stored = localStorage.getItem('doneRecipes');
      const parsed = stored ? JSON.parse(stored) : [];
      const newDoneRecipe = formDoneRecipe(recipe, pathname);
      const updated = [...parsed, newDoneRecipe];
      localStorage.setItem('doneRecipes', JSON.stringify(updated));

      navigate('/done-recipes');
    }
  };

  return (
    <Container>
      <StyledButton
        disabled={ validationToIngredients }
        data-testid="finish-recipe-btn"
        onClick={ handleSaveDoneRecipe }
      >
        {showSpinner
          ? (<Spinner />) : (label)}
      </StyledButton>
    </Container>
  );
}

export default ButtonFinishRecipe;

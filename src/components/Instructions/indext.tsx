import { DrinkType, MealType } from '../../types';
import { Title, Wrapper } from './style';

type InstructionsProps = {
  recipe: MealType[] | DrinkType[];
};

function Instructions({ recipe }: InstructionsProps) {
  const [data] = recipe;
  if (!data) {
    return null;
  }
  const { strInstructions } = data;
  return (
    <>
      <Title>Instructions</Title>
      <Wrapper>
        <p
          data-testid="instructions"
        >
          {strInstructions}
        </p>
      </Wrapper>
    </>
  );
}

export default Instructions;

import { DrinkType, MealType } from '../../types';
import getInstructions from '../../helpers/getInstructions';
import { Title, Wrapper } from './style';

type InstructionsProps = {
  recipe: MealType[] | DrinkType[];
};

function Instructions({ recipe }: InstructionsProps) {
  const [data] = recipe;
  const instructions = data ? getInstructions(data) : [];
  return (
    <>
      <Title>Instructions</Title>
      <Wrapper>
        <p
          data-testid="instructions"
        >
          {instructions}
        </p>
      </Wrapper>
    </>
  );
}

export default Instructions;

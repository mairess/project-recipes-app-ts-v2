import { DrinkType, MealType } from '../../types';
import useSubmit from '../../hooks/useSubmit';
import getTheLabel from '../../helpers/getTheLabel';
import { StyledButton, Spinner, Container } from './style';
import getTestId from '../../helpers/getTestId';

type TestingProps = {
  buttonConfig?: {
    disabled?: boolean,
    email?: string,
    pathname?: string,
    style?: React.CSSProperties,
    theId?: string,
    theRecipe?: MealType[] | DrinkType[],
  }
};

function Testing({ buttonConfig = {} }: TestingProps) {
  const { disabled = true, email = '', pathname = '/', theId, theRecipe } = buttonConfig;
  const { showSpin, handleSubmit } = useSubmit(pathname, email);

  return (
    <Container>
      <StyledButton
        data-testid={ getTestId(pathname) }
        disabled={ !disabled }
        style={ buttonConfig.style }
        onClick={ () => handleSubmit(theRecipe) }
      >
        {showSpin ? <Spinner /> : getTheLabel(pathname, theId)}
      </StyledButton>
    </Container>
  );
}

export default Testing;

import { useNavigate } from 'react-router-dom';
import { Wrapper, Button, Line, Image } from './style';

type ButtonsProfilePageProps = {
  icon: string,
  label: string,
  index: number;
  testId: string;
};

function ButtonsProfilePage({ icon, label, index, testId }: ButtonsProfilePageProps) {
  const navigate = useNavigate();
  const handleNavigate = () => {
    const splitted = label.split(' ');

    const lowered = splitted.map((item) => (
      item.charAt(0).toLowerCase() + item.slice(1)
    ));

    let joined = lowered.join('-');

    if (label === 'Logout') {
      joined = '';
      localStorage.clear();
    }

    navigate(`/${joined}`);
  };
  return (
    <>
      <Wrapper>
        <Button
          onClick={ handleNavigate }
          data-testid={ testId }
        >
          <Image
            src={ icon }
            alt={ label }
          />
          { label }
        </Button>
      </Wrapper>
      {index !== 2 && <Line />}
    </>
  );
}

export default ButtonsProfilePage;

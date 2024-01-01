import getTheMail from '../../helpers/getTheMail';
import ButtonsProfilePage from '../../components/ButtonsProfilePage';
import { Container, MailContent, WrapperMailContent } from './style';
import doneRecipesIcon from '../../images/icon-done-recipes.svg';
import favoriteRecipesIcon from '../../images/icon-favorite-recipes.svg';
import logoutRecipesIcon from '../../images/icon-log-out.svg';

function Profile() {
  const buttonLabels = ['Done Recipes', 'Favorite Recipes', 'Logout'];
  const buttonIcons = [doneRecipesIcon, favoriteRecipesIcon, logoutRecipesIcon];
  const theIds = ['profile-done-btn', 'profile-favorite-btn', 'profile-logout-btn'];

  return (
    <Container>
      <WrapperMailContent>
        <MailContent
          data-testid="profile-email"
        >
          {getTheMail()}
        </MailContent>
      </WrapperMailContent>
      {buttonLabels.map((item: string, index: number) => (
        <ButtonsProfilePage
          key={ item }
          icon={ buttonIcons[index] }
          label={ item }
          index={ index }
          testId={ theIds[index] }
        />
      ))}
    </Container>
  );
}

export default Profile;

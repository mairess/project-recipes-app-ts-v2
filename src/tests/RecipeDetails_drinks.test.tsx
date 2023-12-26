import { screen, waitFor } from '@testing-library/dom';
import App from '../App';
import FoodProvider from '../context/FoodProvider';
import renderWithRouter from './utils/renderWithRouter';

describe('Testing RecipeDetails page on route drinks.', () => {
  test('Verify if inputs are loaded and works as expected.', async () => {
    const { user } = renderWithRouter(
      <FoodProvider>
        <App />
      </FoodProvider>,
      { route: 'drinks/17222' },
    );

    const favoriteBtn = await screen.findByTestId('favorite-btn');
    const shareBtn = await screen.findByTestId('share-btn');
    const startRecipeBtn = await screen.findByTestId('start-recipe-btn');

    expect(favoriteBtn).toBeInTheDocument();
    expect(shareBtn).toBeInTheDocument();
    expect(startRecipeBtn).toBeInTheDocument();

    await user.click(favoriteBtn);
    expect(favoriteBtn).toHaveAttribute('src', '/src/images/blackHeartIcon.svg');
    await user.click(favoriteBtn);
    expect(favoriteBtn).toHaveAttribute('src', '/src/images/whiteHeartIcon.svg');

    await user.click(shareBtn);
    const linkCopiedMessage = await screen.findByText(/link copied!/i);
    expect(linkCopiedMessage).toBeVisible();

    await user.click(startRecipeBtn);
    await waitFor(() => {
      expect(window.location.pathname).toBe('/drinks/17222/in-progress');
    });
  });
});

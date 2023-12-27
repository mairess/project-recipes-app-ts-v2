import { screen, waitFor } from '@testing-library/react';
import FoodProvider from '../context/FoodProvider';
import App from '../App';
import renderWithRouter from './utils/renderWithRouter';

describe('Testing RecipeDetails page on route meals.', () => {
  test('Verify if inputs are loaded and works as expected.', async () => {
    const { user } = renderWithRouter(
      <FoodProvider>
        <App />
      </FoodProvider>,
      { route: 'meals/53060' },
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
      expect(window.location.pathname).toBe('/meals/53060/in-progress');
    });
  });
});

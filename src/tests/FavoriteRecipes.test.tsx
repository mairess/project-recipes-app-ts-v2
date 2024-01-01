import { screen, waitFor } from '@testing-library/react';
import { vi } from 'vitest';
import App from '../App';
import renderWithRouter from './utils/renderWithRouter';
import FoodProvider from '../context/FoodProvider';
import favoriteRecipeLocalStorageMock from './mocks/favoriteRecipeLocalStorageMock';

const theRoute = '/favorite-recipes';

describe('Testing FavoriteRecipes page.', () => {
  test('Should filter meals and drinks.', async () => {
    localStorage.setItem('favoriteRecipes', JSON.stringify(favoriteRecipeLocalStorageMock));
    const { user } = renderWithRouter(
      <FoodProvider>
        <App />
        ,
      </FoodProvider>,
      { route: theRoute },
    );

    const filterAllBtn = await screen.findByTestId('filter-by-all-btn');
    const filterMealsBtn = await screen.findByTestId('filter-by-meal-btn');
    const filterDrinksBtn = await screen.findByTestId('filter-by-drink-btn');

    const arrabiata = screen.getByAltText(/Spicy Arrabiata Penne/i);
    const aquamarine = screen.getByAltText(/Aquamarine/i);
    expect(aquamarine).toBeVisible();
    expect(arrabiata).toBeVisible();

    await user.click(filterMealsBtn);
    expect(aquamarine).not.toBeVisible();
    expect(arrabiata).toBeVisible();

    await user.click(filterDrinksBtn);
    const aquamarineSecondTime = screen.getByAltText(/Aquamarine/i);
    expect(arrabiata).not.toBeVisible();
    expect(aquamarineSecondTime).toBeVisible();

    await user.click(filterAllBtn);
    const arrabiataSecondTime = screen.getByAltText(/Spicy Arrabiata Penne/i);
    expect(arrabiataSecondTime).toBeVisible();
    expect(aquamarineSecondTime).toBeVisible();
  });

  test('Should display message "Link copied!" and copy link to share.', async () => {
    const { user } = renderWithRouter(
      <FoodProvider>
        <App />
        ,
      </FoodProvider>,
      { route: theRoute },
    );

    const mockedClipboard = vi.spyOn(navigator.clipboard, 'writeText');
    mockedClipboard.mockReturnValue((Promise.resolve()));

    const shareBtn = screen.getAllByAltText(/Share icon/);

    await user.click(shareBtn[0]);

    await waitFor(() => {
      const linkCopiedMessage = screen.getByText(/link copied!/i);

      expect(linkCopiedMessage).toBeVisible();
      expect(mockedClipboard).toHaveBeenCalled();
    });
  });
});

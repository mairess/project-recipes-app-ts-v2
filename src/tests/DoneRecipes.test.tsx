import { screen, waitFor } from '@testing-library/react';
import { vi } from 'vitest';
import App from '../App';
import renderWithRouter from './utils/renderWithRouter';
import FoodProvider from '../context/FoodProvider';

const doneRecipes = [
  {
    id: '52771',
    nationality: 'Italian',
    name: 'Spicy Arrabiata Penne',
    category: 'Vegetarian',
    image: 'https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg',
    tags: [
      'Pasta',
      'Curry',
    ],
    alcoholicOrNot: '',
    type: 'meal',
    doneDate: '30/12/2023',
  },
  {
    id: '178319',
    nationality: '',
    name: 'Aquamarine',
    category: 'Cocktail',
    image: 'https://www.thecocktaildb.com/images/media/drink/zvsre31572902738.jpg',
    tags: [],
    alcoholicOrNot: 'Alcoholic',
    type: 'drink',
    doneDate: '30/12/2023',
  },
];

const theRoute = '/done-recipes';

describe('Testing DoneRecipes page.', () => {
  test('Should filter meals and drinks.', async () => {
    localStorage.setItem('doneRecipes', JSON.stringify(doneRecipes));

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
    expect(aquamarineSecondTime).toBeVisible();
    expect(arrabiata).not.toBeVisible();

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

import { screen } from '@testing-library/react';
import { vi } from 'vitest';
import SearchTermProvider from '../context/SearchTermContext';
import Card from '../components/Card';
import FilterBar from '../components/FilterBar';
import App from '../App';
import renderWithRouter from './utils/renderWithRouter';
import FoodProvider from '../context/FoodProvider';
import mealCategories from './mocks/mealCategories';
import meals from './mocks/meals';

describe('Testing FilterBar component on route "/meals".', () => {
  test('Verify if FilterBar and its buttons are loaded and if they fetch.', async () => {
    const mockResponseMeals = {
      ok: true,
      status: 200,
      json: async () => ({ meals }),
    } as Response;

    const mockResponseCategories = {
      ok: true,
      status: 200,
      json: async () => ({ mealCategories }),
    } as Response;

    vi.spyOn(global, 'fetch')
      .mockResolvedValueOnce(mockResponseMeals)
      .mockResolvedValue(mockResponseCategories);

    const { user } = renderWithRouter(
      <SearchTermProvider>
        <FoodProvider>
          <App />
          ,
        </FoodProvider>
      </SearchTermProvider>,
      { route: '/meals' },
    );

    // expect(fetch).toBeCalledTimes(2);
    // const filterAllBtn = await screen.findByTestId('All-category-filter');
    // const filterBeefBtn = await screen.findByTestId('Beef-category-filter');
    // const filterBreakfastBtn = await screen.findByTestId('Breakfast-category-filter');
    // const filterChickenBtn = await screen.findByTestId('Chicken-category-filter');
    // const filterDessertBtn = await screen.findByTestId('Dessert-category-filter');
    // const filterGoatBtn = await screen.findByTestId('Goat-category-filter');

    // await user.click(filterChickenBtn);
    screen.debug();
    // const drinkBtn = screen.getByTestId('drinks-bottom-btn');
    // const mealBtn = screen.getByTestId('meals-bottom-btn');

    // expect(footer).toBeVisible();
    // expect(drinkBtn).toBeVisible();'
    // expect(mealBtn).toBeVisible();

    // await user.click(drinkBtn);
    // expect(window.location.pathname).toBe('/drinks');

    // await user.click(mealBtn);
    // expect(window.location.pathname).toBe('/meals');
  });
});

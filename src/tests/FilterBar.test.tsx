import { vi } from 'vitest';
import SearchTermProvider from '../context/SearchTermContext';
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

    renderWithRouter(
      <SearchTermProvider>
        <FoodProvider>
          <App />
          ,
        </FoodProvider>
      </SearchTermProvider>,
      { route: '/meals' },
    );
  });
});

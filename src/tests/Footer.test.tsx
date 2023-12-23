import { screen } from '@testing-library/react';
import App from '../App';
import renderWithRouter from './utils/renderWithRouter';
import FoodProvider from '../context/FoodProvider';

describe('Testing Footer component.', () => {
  test('Verify if Footer and its buttons are loaded and if they navigate to routes correctly.', async () => {
    const { user } = renderWithRouter(
      <FoodProvider>
        <App />
        ,
      </FoodProvider>,
      { route: '/meals' },
    );

    const footer = screen.getByTestId('footer');
    const drinkBtn = screen.getByTestId('drinks-bottom-btn');
    const mealBtn = screen.getByTestId('meals-bottom-btn');

    expect(footer).toBeVisible();
    expect(drinkBtn).toBeVisible();
    expect(mealBtn).toBeVisible();

    await user.click(drinkBtn);
    expect(window.location.pathname).toBe('/drinks');

    await user.click(mealBtn);
    expect(window.location.pathname).toBe('/meals');
  });
});

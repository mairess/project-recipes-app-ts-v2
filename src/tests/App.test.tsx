import React from 'react';
import { screen, waitFor } from '@testing-library/react';
import FoodProvider from '../context/FoodProvider';
import App from '../App';
import renderWithRouter from './utils/renderWithRouter';

describe('Testing Login page.', () => {
  test('Verify if inputs are loaded and if it navigates to route "/meals" when enter button is clicked.', async () => {
    const { user } = renderWithRouter(
      <FoodProvider>
        <App />
        ,
      </FoodProvider>,
    );

    const emailInput = screen.getByTestId('email-input');
    const passwordInput = screen.getByTestId('password-input');
    const loginBtn = screen.getByTestId('login-submit-btn');
    const title = screen.getByRole('heading', { name: 'Login' });

    expect(title).toBeVisible();

    await user.type(emailInput, 'fake@mail.com');
    await user.type(passwordInput, 'moreThanSixChar');
    await user.click(loginBtn);

    await waitFor(() => expect(window.location.pathname).toBe('/meals'));
  });
});

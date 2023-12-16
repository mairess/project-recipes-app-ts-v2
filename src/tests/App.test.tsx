import React from 'react';
import { screen } from '@testing-library/react';
import App from '../App';
import renderWithRouter from './utils/renderWithRouter';

describe('Testing Login page', () => {
  test('Verify if inputs are loaded and if navigate to route "/meals" ola', async () => {
    const { user } = renderWithRouter(<App />, { route: '/' });

    const emailInput = screen.getByTestId('email-input');
    const passwordInput = screen.getByTestId('password-input');
    const loginBtn = screen.getByTestId('login-submit-btn');
    const title = screen.getByRole('heading', { name: 'Login' });

    expect(title).toBeVisible();

    await user.type(emailInput, 'fake@mail.com');
    await user.type(passwordInput, 'moreThanSixChar');
    await user.click(loginBtn);

    expect(window.location.pathname).toBe('/meals');
  });
});

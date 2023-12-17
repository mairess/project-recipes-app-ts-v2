import { screen } from '@testing-library/react';
import App from '../App';
import renderWithRouter from './utils/renderWithRouter';

describe('Testing Header component.', () => {
  test('Verify if inputs are loaded and if it navigates to route "/profile" when profile button is clicked.', async () => {
    const { user } = renderWithRouter(<App />, { route: '/meals' });

    const profileIconBtn = screen.getByTestId('profile-top-btn');
    const searchIconBtn = screen.getByTestId('search-top-btn');
    const pageTitle = screen.getByTestId('page-title');

    expect(profileIconBtn).toBeVisible();
    expect(searchIconBtn).toBeVisible();
    expect(pageTitle).toBeVisible();

    await user.click(searchIconBtn);
    const searchBar = screen.getByTestId('search-input');
    expect(searchBar).toBeVisible();

    await user.click(profileIconBtn);
    expect(window.location.pathname).toBe('/profile');
  });
});

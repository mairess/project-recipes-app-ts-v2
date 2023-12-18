import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import FoodProvider from './context/FoodProvider';
import App from './App';
import GlobalStyle from './styles/globals';

ReactDOM
  .createRoot(document.getElementById('root') as HTMLElement)
  .render(
    <BrowserRouter>
      <FoodProvider>
        <App />
      </FoodProvider>
      <GlobalStyle />
    </BrowserRouter>,
  );

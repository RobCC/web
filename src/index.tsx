// import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import AppRouter from './router';

import './variables.css';
import './themes.css';
import './global.css';

createRoot(document.getElementById('root')!).render(
  // <StrictMode>
  <AppRouter />,
  // </StrictMode>,
);

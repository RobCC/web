// import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

import router from './router';

import './variables.css';
import './themes.css';
import './global.css';

createRoot(document.getElementById('root')!).render(
  // <StrictMode>
  <RouterProvider router={router} />,
  // </StrictMode>,
);

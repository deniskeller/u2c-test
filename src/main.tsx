import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './assets/scss/core.scss';
import { BrowserRouter, Route, Routes } from 'react-router';

import { Home } from './view';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);

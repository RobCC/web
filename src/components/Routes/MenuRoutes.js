import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { Content } from '../../views';

export const PATHS = {
  root: '/',
  allPaths: '*',
};

function MenuRoutes() {
  return (
    <Routes>
      <Route path={PATHS.root} exact element={<Content />} />
      <Route path={PATHS.allPaths} element={<Content />} />
    </Routes>
  );
}

export default MenuRoutes;

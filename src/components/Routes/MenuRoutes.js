import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { EditorView } from '../../views';

export const PATHS = {
  root: '/',
  allPaths: '*',
};

// TODO: No longer needed?
function MenuRoutes() {
  return (
    <Routes>
      <Route path={PATHS.root} exact element={<EditorView />} />
      <Route path={PATHS.allPaths} element={<EditorView />} />
    </Routes>
  );
}

export default MenuRoutes;

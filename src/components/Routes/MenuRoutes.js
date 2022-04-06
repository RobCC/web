import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { CodeEditor } from '../../views';

export const PATHS = {
  root: '/',
  allPaths: '*',
};

function MenuRoutes() {
  return (
    <Routes>
      <Route path={PATHS.root} exact element={<CodeEditor />} />
      <Route path={PATHS.allPaths} element={<CodeEditor />} />
    </Routes>
  );
}

export default MenuRoutes;

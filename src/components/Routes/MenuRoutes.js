import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { EditorView, Resume } from '../../views';

export const PATHS = {
  root: '/',
  resume: '/resume',
  allPaths: '*',
};

const MenuRoutes = () => (
  <Switch>
    <Route path={PATHS.root} exact component={EditorView} />
    <Route path={PATHS.resume} exact component={Resume} />
    <Route path={PATHS.allPaths} component={EditorView} />
  </Switch>
);

export default MenuRoutes;

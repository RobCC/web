import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { Home, Resume } from '../../views';

const MenuRoutes = () => (
  <Switch>
    <Route path="/" exact>
      <Redirect to="/home" />
    </Route>
    <Route path="/home">
      <Home />
    </Route>
    <Route path="/resume" component={Resume} />
  </Switch>
);

export default MenuRoutes;

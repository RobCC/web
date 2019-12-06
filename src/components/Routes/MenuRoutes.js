import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { Home, About } from '../../views';

const MenuRoutes = () => (
  <Switch>
    <Route path="/" exact>
      <Redirect to="/home" />
    </Route>
    <Route path="/home">
      <Home />
    </Route>
    <Route path="/resume" component={About} />
  </Switch>
);

export default MenuRoutes;

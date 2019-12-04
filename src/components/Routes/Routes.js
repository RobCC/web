import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Home, About } from '../../views';

const Routes = () => (
  <Switch>
    <Route path="/" exact>
      <Home />
    </Route>
    <Route path="/about" component={About} />
  </Switch>
);

export default Routes;

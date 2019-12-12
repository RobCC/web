import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Home, Resume } from '../../views';

const MenuRoutes = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/contact" exact component={Home} />
    <Route path="/resume" exact component={Resume} />
  </Switch>
);

export default MenuRoutes;

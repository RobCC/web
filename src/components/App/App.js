import React from 'react';
import { BrowserRouter as Router, NavLink } from 'react-router-dom';

import Menu from 'Components/Menu/Menu';

import Routes from '../Routes/Routes';

const App = () => (
  <Router>
    <Menu />
    <nav>
      <ul>
        <li>
          <NavLink to="/" exact>Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
      </ul>
    </nav>

    <div>
      <Routes />
    </div>
  </Router>
);

export default App;

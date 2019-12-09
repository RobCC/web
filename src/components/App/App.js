import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Menu from 'Components/Menu/Menu';
import MenuRoutes from 'Components/Routes/MenuRoutes';
import Contact from '#/views/Contact/Contact';

import styles from './app.scss';

const App = () => (
  <Router>
    <div className={styles.root}>
      <Menu />

      <div className={styles.content}>
        <Contact />
        <MenuRoutes />
      </div>

    </div>
  </Router>
);

export default App;

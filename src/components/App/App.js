import React from 'react';
import { HashRouter as Router } from 'react-router-dom';

import SideMenu from 'Components/SideMenu/SideMenu';
import MenuRoutes from 'Components/Routes/MenuRoutes';
import Contact from '#/views/Contact/Contact';
import { Resume } from '#/views';

import styles from './app.scss';

const App = () => (
  <Router basename="/">
    <div className={styles.root}>
      <SideMenu />

      <div className={styles.content}>
        <Contact />
        <MenuRoutes />
      </div>

      <Resume />

    </div>
  </Router>
);

export default App;

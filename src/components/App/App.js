import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import { config } from '@fortawesome/fontawesome-svg-core';

import SideMenu from 'Components/SideMenu/SideMenu';
import MenuRoutes from 'Components/Routes/MenuRoutes';
import Contact from '#/views/Contact/Contact';
import { Resume, Explorer } from '#/views';

import styles from './app.scss';

config.autoAddCss = false;

const App = () => (
  <Router basename="/">
    <div className={styles.root}>
      <SideMenu />

      <div className={styles.content}>
        <Contact />
        <Explorer />
        <MenuRoutes />
      </div>

      <Resume />

    </div>
  </Router>
);

export default App;

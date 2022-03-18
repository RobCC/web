import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import { config } from '@fortawesome/fontawesome-svg-core';

import SideMenu from 'Components/SideMenu/SideMenu';
import MenuRoutes from 'Components/Routes/MenuRoutes';
import { Resume, ExplorerView } from '#/views';

import styles from './app.scss';

config.autoAddCss = false;

function App() {
  return (
    <Router basename="/">
      <div className={styles.root}>
        <SideMenu />

        <div className={styles.content}>
          <ExplorerView />
          <MenuRoutes />
        </div>

        <Resume />
      </div>
    </Router>
  );
}

export default App;

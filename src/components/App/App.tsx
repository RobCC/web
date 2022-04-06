import { HashRouter as Router } from 'react-router-dom';
import { config } from '@fortawesome/fontawesome-svg-core';

import SideMenu from '#/components/SideMenu/SideMenu';
import MenuRoutes from '#/components/Routes/MenuRoutes';
import { Resume, ExplorerView } from '#/views';

import styles from './app.scss';

config.autoAddCss = false;

export default function App() {
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

import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Menu from 'Components/Menu/Menu';
import Routes from 'Components/Routes/Routes';

import styles from './app.scss';

const App = () => (
  <Router>
    <div className={styles.root}>
      <Menu />

      <div className={styles.content}>
        <div>
          <Routes />
        </div>
      </div>

    </div>
  </Router>
);

export default App;

import React from 'react';
import { HashRouter as Router } from 'react-router-dom';

import FileMenu from 'Components/FileTabMenu/FileTabMenu';
import FileRoutes from 'Components/Routes/FileRoutes';

import styles from './home.scss';

const files = [
  {
    name: 'greet.js',
    extension: 'JS',
    to: '/',
  },
  {
    name: 'contact.css',
    extension: '#',
    to: '/contact',
  },
];

const Home = () => (
  <div className={styles.homeWrapper}>
    <Router basename="/">
      <FileMenu files={files} />
      <FileRoutes />
    </Router>
  </div>
);

export default Home;

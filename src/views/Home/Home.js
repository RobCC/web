import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import FileMenu from 'Components/FileTabMenu/FileTabMenu';
import FileRoutes from 'Components/Routes/FileRoutes';

const HOME_PATH = '/home';

const files = [
  {
    name: 'greet.js',
    extension: 'JS',
    to: `${HOME_PATH}/greet`,
  },
  {
    name: 'contact.css',
    extension: '#',
    to: `${HOME_PATH}/contact`,
  },
];

const Home = () => (
  <div>
    <Router>
      <FileMenu files={files} />
      <FileRoutes />
    </Router>
  </div>
);

export default Home;

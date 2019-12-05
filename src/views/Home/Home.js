import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import FileMenu from 'Components/FileTabMenu/FileTabMenu';
import FileRoutes from 'Components/Routes/FileRoutes';

const HOME_PATH = '/home';

const files = [
  { name: 'greet.js', to: `${HOME_PATH}/greet` },
  { name: 'intro2.js', to: `${HOME_PATH}/intro2` },
];

const Home = () => (
  <Router>
    <FileMenu files={files} />
    <div>
      <FileRoutes />
    </div>
  </Router>
);

export default Home;

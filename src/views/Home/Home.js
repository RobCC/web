import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { useSelector } from 'react-redux';

import FileMenu from 'Components/FileTabMenu/FileTabMenu';
import FileRoutes from 'Components/Routes/FileRoutes';
import { email } from '#/store/ducks';

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

const Home = () => {
  const isEmailOpen = useSelector((state) => email.isEmailOpen(state));

  return (
    <Router>
      <FileMenu files={files} />
      {isEmailOpen && (
        <div>Help me</div>
      )}
      <FileRoutes />
    </Router>
  );
};

export default Home;

import React from 'react';
import PropTypes from 'prop-types';

import Header from '../Header/Header';
import Career from '../Career/Career';
import Ecosystem from '../Ecosystem/Ecosystem';
import Projects from '../Projects/Projects';

import styles from './wrapper.scss';

const Wrapper = ({ onScreen }) => (
  <div className={styles.wrapper}>
    <Header onScreen={onScreen} />
    <div className={styles.body}>
      <div className={styles.left}>
        <Career />
      </div>
      <div className={styles.right}>
        <Ecosystem />
        <Projects />
      </div>
    </div>
  </div>
);

Wrapper.propTypes = {
  onScreen: PropTypes.bool,
};

export default Wrapper;

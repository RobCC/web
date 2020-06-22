import React from 'react';
import PropTypes from 'prop-types';

import Section from '../Section/Section';
import Header from '../Header/Header';
import Timeline from '../Career/Career';

import styles from './wrapper.scss';

const Wrapper = ({ onScreen }) => (
  <div className={styles.wrapper}>
    <Header onScreen={onScreen} />
    <Timeline />
    <Section style={{
      flex: '0 0 10%',
      height: '50%',
    }}
    >
      Hi 2
    </Section>
  </div>
);

Wrapper.propTypes = {
  onScreen: PropTypes.bool,
};

export default Wrapper;

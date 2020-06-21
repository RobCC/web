import React from 'react';
import PropTypes from 'prop-types';

import Section from '../Section/Section';
import Header from '../Header/Header';

import styles from './wrapper.scss';

const Wrapper = ({ onScreen }) => (
  <div className={styles.wrapper}>
    <Header onScreen={onScreen} />
    <div>
      <Section style={{
        flex: '0 0 42%',
        height: '50%',
      }}
      >
        Hi
      </Section>
      <Section style={{
        flex: '0 0 40%',
        height: '50%',
      }}
      >
        Hi 2
      </Section>
    </div>
  </div>
);

Wrapper.propTypes = {
  onScreen: PropTypes.bool,
};

export default Wrapper;

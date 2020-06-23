import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJs, faNodeJs } from '@fortawesome/free-brands-svg-icons';

import VsCode from '#/svg/VsCode';
import Typescript from '#/svg/Typescript';
import Section from '../Section/Section';

import styles from './ecosystem.scss';

/* eslint-disable max-len */
const Ecosystem = ({ onScreen }) => (
  <Section className={styles.wrapper} title="Ecosystem">
    <div className={styles.element}>
      <VsCode />
    </div>
    <div className={styles.element}>
      <FontAwesomeIcon icon={faJs} />
    </div>
    <div className={styles.element}>
      <FontAwesomeIcon icon={faNodeJs} />
    </div>
  </Section>
);

Ecosystem.propTypes = {
  onScreen: PropTypes.bool,
};

export default Ecosystem;

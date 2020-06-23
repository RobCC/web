import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faJs, faNodeJs, faReact, faSass, faNpm,
} from '@fortawesome/free-brands-svg-icons';

import VsCode from '#/svg/VsCode';
import Typescript from '#/svg/Typescript';
import Webpack from '#/svg/Webpack';
import Babel from '#/svg/Babel';
import Redux from '#/svg/Redux';
import Section from '../Section/Section';

import styles from './ecosystem.scss';

import rollup from '~/public/images/rollup.png';

function setStyles(c) {
  return classNames(styles.element, c);
}

/* eslint-disable max-len */
const Ecosystem = ({ onScreen }) => (
  <Section className={styles.wrapper} title="Ecosystem">
    <div className={styles.table}>
      <div className={setStyles(styles.vscode)}>
        <VsCode />
      </div>
      <div className={setStyles(styles.js)}>
        <FontAwesomeIcon icon={faJs} />
      </div>
      <div className={setStyles(styles.node)}>
        <FontAwesomeIcon icon={faNodeJs} />
      </div>
      <div className={setStyles(styles.react)}>
        <FontAwesomeIcon icon={faReact} />
      </div>
      <div className={setStyles(styles.redux)}>
        <Redux />
      </div>
      <div className={setStyles(styles.sass)}>
        <FontAwesomeIcon icon={faSass} />
      </div>
      <div className={setStyles(styles.npm)}>
        <FontAwesomeIcon icon={faNpm} />
      </div>
      <div className={setStyles(styles.babel)}>
        <Babel />
      </div>
      <div className={setStyles(styles.webpack)}>
        <Webpack />
      </div>
      <div className={setStyles(styles.ts)}>
        <Typescript />
      </div>
      <div className={styles.element}>
        <img alt="Rollup" src={rollup} />
      </div>
    </div>
  </Section>
);

Ecosystem.propTypes = {
  onScreen: PropTypes.bool,
};

export default Ecosystem;

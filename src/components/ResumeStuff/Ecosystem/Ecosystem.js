import React, { useRef } from 'react';
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
import data from './data';

import rollup from '~/public/images/rollup.png';

function clearChildren(element) {
  while (element.lastChild) {
    element.removeChild(element.lastChild);
  }
}

const EcoElement = ({
  name, className, onHover, children,
}) => (
  <div
    className={classNames(styles.element, className)}
    onMouseOver={onHover}
    onFocus={onHover}
    data-name={name}
  >
    {children}
  </div>
);

EcoElement.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  onHover: PropTypes.func,
  children: PropTypes.node,
};

const Ecosystem = ({ onScreen }) => {
  const titleRef = useRef(null);
  const detailRef = useRef(null);

  const onHover = (event) => {
    const { target } = event;

    if (!target.classList.contains(styles.element)) {
      return;
    }

    const detailElement = detailRef.current;
    const titleElement = titleRef.current;
    const icon = target.firstChild.cloneNode(true);
    const { name } = target.dataset;
    const elementData = data[name];

    titleElement.textContent = '';
    clearChildren(detailElement);
    detailElement.appendChild(icon);
    detailElement.className = target.className;
    detailElement.classList.add(styles.detailElement);
    titleElement.textContent = elementData.name;
  };

  return (
    <Section className={styles.wrapper} title="Ecosystem">
      <div className={styles.content}>
        <div className={styles.table}>
          <EcoElement name="vscode" className={styles.vscode} onHover={onHover}>
            <VsCode />
          </EcoElement>
          <EcoElement name="js" className={styles.js} onHover={onHover}>
            <FontAwesomeIcon icon={faJs} />
          </EcoElement>
          <EcoElement name="node" className={styles.node} onHover={onHover}>
            <FontAwesomeIcon icon={faNodeJs} />
          </EcoElement>
          <EcoElement name="react" className={styles.react} onHover={onHover}>
            <FontAwesomeIcon icon={faReact} />
          </EcoElement>
          <EcoElement name="redux" className={styles.redux} onHover={onHover}>
            <Redux />
          </EcoElement>
          <EcoElement name="sass" className={styles.sass} onHover={onHover}>
            <FontAwesomeIcon icon={faSass} />
          </EcoElement>
          <EcoElement name="npm" className={styles.npm} onHover={onHover}>
            <FontAwesomeIcon icon={faNpm} />
          </EcoElement>
          <EcoElement name="babel" className={styles.babel} onHover={onHover}>
            <Babel />
          </EcoElement>
          <EcoElement name="rollup" className="" onHover={onHover}>
            <img alt="Rollup" src={rollup} />
          </EcoElement>
          <EcoElement name="webpack" className={styles.webpack} onHover={onHover}>
            <Webpack />
          </EcoElement>
          <EcoElement name="ts" className={styles.ts} onHover={onHover}>
            <Typescript />
          </EcoElement>
        </div>
        <div className={styles.detail}>
          <div ref={detailRef} />
          <div ref={titleRef} className={styles.detailTitle} />
        </div>
      </div>
    </Section>
  );
};

Ecosystem.propTypes = {
  onScreen: PropTypes.bool,
};

export default Ecosystem;

import React, { useCallback, useRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faJs,
  faNodeJs,
  faReact,
  faSass,
  faNpm,
  faGitAlt,
} from '@fortawesome/free-brands-svg-icons';

import { VsCode, Typescript, Webpack, Babel, Redux } from '#/svg';
import MountAnimator from '#/utils/MountAnimator';
import rollup from '~/public/images/rollup.png';
import Section from '../Section/Section';
import styles from './ecosystem.scss';
import data from './data';

function clearChildren(element) {
  while (element.lastChild) {
    element.removeChild(element.lastChild);
  }
}

function EcoElement({ name, className, onHover, onBlur, children }) {
  return (
    <div
      className={classNames(styles.element, className)}
      onMouseOver={onHover}
      onFocus={onHover}
      onMouseLeave={onBlur}
      data-name={name}
    >
      {children}
    </div>
  );
}

EcoElement.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  onHover: PropTypes.func,
  onBlur: PropTypes.func,
  children: PropTypes.node,
};

function Ecosystem({ onScreen = false }) {
  const titleRef = useRef(null);
  const detailRef = useRef(null);

  const onHover = useCallback((event) => {
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
  }, []);

  const onBlur = useCallback(() => {
    clearChildren(detailRef.current);
    detailRef.current.className = '';
    titleRef.current.textContent = '';
  }, []);

  return (
    <MountAnimator
      mount={onScreen}
      className={styles.wrapper}
      inAnimation={styles.fadeInRight}
      outAnimation={styles.fadeOutRight}
    >
      <Section title="Ecosystem">
        <div className={styles.content}>
          <div className={styles.table}>
            <EcoElement
              name="vscode"
              className={styles.vscode}
              onHover={onHover}
              onBlur={onBlur}
            >
              <VsCode />
            </EcoElement>
            <EcoElement
              name="js"
              className={styles.js}
              onHover={onHover}
              onBlur={onBlur}
            >
              <FontAwesomeIcon icon={faJs} />
            </EcoElement>
            <EcoElement
              name="node"
              className={styles.node}
              onHover={onHover}
              onBlur={onBlur}
            >
              <FontAwesomeIcon icon={faNodeJs} />
            </EcoElement>
            <EcoElement
              name="react"
              className={styles.react}
              onHover={onHover}
              onBlur={onBlur}
            >
              <FontAwesomeIcon icon={faReact} />
            </EcoElement>
            <EcoElement
              name="redux"
              className={styles.redux}
              onHover={onHover}
              onBlur={onBlur}
            >
              <Redux />
            </EcoElement>
            <EcoElement
              name="sass"
              className={styles.sass}
              onHover={onHover}
              onBlur={onBlur}
            >
              <FontAwesomeIcon icon={faSass} />
            </EcoElement>
            <EcoElement
              name="npm"
              className={styles.npm}
              onHover={onHover}
              onBlur={onBlur}
            >
              <FontAwesomeIcon icon={faNpm} />
            </EcoElement>
            <EcoElement
              name="babel"
              className={styles.babel}
              onHover={onHover}
              onBlur={onBlur}
            >
              <Babel />
            </EcoElement>
            <EcoElement
              name="rollup"
              className=""
              onHover={onHover}
              onBlur={onBlur}
            >
              <img alt="Rollup" src={rollup} />
            </EcoElement>
            <EcoElement
              name="webpack"
              className={styles.webpack}
              onHover={onHover}
              onBlur={onBlur}
            >
              <Webpack />
            </EcoElement>
            <EcoElement
              name="ts"
              className={styles.ts}
              onHover={onHover}
              onBlur={onBlur}
            >
              <Typescript />
            </EcoElement>
            <EcoElement
              name="git"
              className={styles.git}
              onHover={onHover}
              onBlur={onBlur}
            >
              <FontAwesomeIcon icon={faGitAlt} />
            </EcoElement>
          </div>
          <div className={styles.detail}>
            <div ref={detailRef} />
            <div ref={titleRef} className={styles.detailTitle} />
          </div>
        </div>
      </Section>
    </MountAnimator>
  );
}

Ecosystem.propTypes = {
  onScreen: PropTypes.bool,
};

export default Ecosystem;

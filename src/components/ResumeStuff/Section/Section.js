import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import styles from './section.scss';

const Section = ({
  className = '', title, children,
}) => (
  <div className={classNames(styles.section, className)}>
    <div className={styles.title}>{title}</div>
    {children}
  </div>
);

Section.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Section;

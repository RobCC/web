import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import styles from './section.scss';

/* eslint-disable max-len */
const Section = ({ style, className = '', children }) => (
  <div style={style} className={classNames(styles.section, className)}>
    {children}
  </div>
);

/* eslint-disable react/forbid-prop-types */
Section.propTypes = {
  style: PropTypes.shape({
    height: PropTypes.string,
    flex: PropTypes.string,
    left: PropTypes.string,
    right: PropTypes.string,
    width: PropTypes.string,
  }),
  className: PropTypes.string,
  children: PropTypes.node,
};

export default Section;

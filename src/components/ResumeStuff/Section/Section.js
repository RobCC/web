import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import styles from './section.scss';

/* eslint-disable max-len */
const Section = ({ style, classes = '', children }) => (
  <div style={style} className={classNames(styles.section, classes)}>
    {children}
  </div>
);

Section.propTypes = {
  style: PropTypes.shape({
    height: PropTypes.string,
    flex: PropTypes.string,
    left: PropTypes.string,
    right: PropTypes.string,
    width: PropTypes.string,
  }),
  classes: PropTypes.string,
  children: PropTypes.node,
};

export default Section;

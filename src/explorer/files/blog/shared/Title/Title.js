import PropTypes from 'prop-types';
import React from 'react';

import styles from './title.scss';

export function Title({ children }) {
  return <div className={styles.title}>{children}</div>;
}

Title.propTypes = {
  children: PropTypes.string,
};

export default Title;

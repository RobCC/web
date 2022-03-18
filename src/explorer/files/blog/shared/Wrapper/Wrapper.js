import PropTypes from 'prop-types';
import React from 'react';

import styles from './wrapper.scss';

export function Wrapper({ children }) {
  return <div className={styles.wrapper}>{children}</div>;
}

Wrapper.propTypes = {
  children: PropTypes.array,
};

export default Wrapper;

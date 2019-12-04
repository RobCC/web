import PropTypes from 'prop-types';
import React from 'react';

import styles from './codeLine.scss';

const CodeLine = ({ lineNumber, children }) => (
  <div className={styles.line}>
    <span className={styles.number}>{lineNumber}</span>
    <span className={styles.content}>{children}</span>
  </div>
);

CodeLine.propTypes = {
  lineNumber: PropTypes.number,
  children: PropTypes.node,
};

export default CodeLine;

import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';

import styles from './codeLine.scss';

const isComment = (text) => typeof text === 'string'
  && (text.startsWith('/*') || text.startsWith('*') || text.startsWith('*/'));

const CodeLine = ({ lineNumber, children }) => (
  <div className={styles.line}>
    <span className={styles.number}>{lineNumber}</span>
    <pre
      className={classNames(styles.content, {
        [styles.comment]: isComment(children),
      })}
    >
      {children}
    </pre>
  </div>
);

CodeLine.propTypes = {
  lineNumber: PropTypes.number,
  children: PropTypes.node,
};

export default CodeLine;

import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';

import parser from '#/utils/lineParser';

import styles from './codeLine.scss';

const CodeLine = ({ lineNumber, children: line }) => {
  const lineStyles = classNames(styles.content, {
    [styles.comment]: parser.isComment(line),
  });


  /* eslint-disable no-nested-ternary */
  return (
    <div className={styles.line}>
      <span className={styles.number}>{lineNumber}</span>
      <pre className={lineStyles}>{parser.parseLine(line)}</pre>

    </div>
  );
};

CodeLine.propTypes = {
  lineNumber: PropTypes.number,
  children: PropTypes.node,
};

export default CodeLine;

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import parser from '#/utils/lineParser';
import styles from './codeLine.scss';

const CodeLine = ({ lineNumber, isAnimated = false, children: line }) => {
  const lineClasses = classNames(styles.content, {
    [styles.comment]: parser.isComment(line),
    [styles.animated]: isAnimated,
  });

  return (
    <div className={styles.line}>
      <span className={styles.number}>{lineNumber}</span>
      <pre className={lineClasses}>
        <span className={styles.text}>{parser.parseLine(line)}</span>
      </pre>
    </div>
  );
};

CodeLine.propTypes = {
  isAnimated: PropTypes.bool,
  lineNumber: PropTypes.number,
  children: PropTypes.node,
};

export default CodeLine;

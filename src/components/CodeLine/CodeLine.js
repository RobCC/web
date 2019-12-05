import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';

import lineParser from '#/utils/lineParser';

import styles from './codeLine.scss';

const CodeLine = ({ lineNumber, children: line }) => {
  const lineStyles = classNames(styles.content, {
    [styles.comment]: lineParser.isComment(line),
  });


  /* eslint-disable no-nested-ternary */
  return (
    <div className={styles.line}>
      <span className={styles.number}>{lineNumber}</span>
      {lineParser.hasLink(line)
        ? (lineParser.convertLink(line))
        : lineParser.hasMark(line)
          ? (lineParser.convertMark(line))
          : (<pre className={lineStyles}>{line}</pre>
          )}
    </div>
  );
};

CodeLine.propTypes = {
  lineNumber: PropTypes.number,
  children: PropTypes.node,
};

export default CodeLine;

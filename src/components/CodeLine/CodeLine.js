import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';

import parser from '#/utils/lineParser';
import styles from './codeLine.scss';
import { editor } from '#/store/ducks';

const {
  hasAnimationFinished,
  setAnimationFinished,
} = editor;

const CodeLine = ({ lineNumber, isAnimated = false, children: line }) => {
  const typingFinished = useSelector((store) => hasAnimationFinished(store));
  const dispatch = useDispatch();
  const lineClasses = classNames(styles.content, {
    [styles.comment]: parser.isComment(line),
    [styles.typeAnimated]: isAnimated && !typingFinished,
    [styles.caretAnimated]: isAnimated && typingFinished,
  });

  useEffect(() => () => isAnimated && !typingFinished && dispatch(setAnimationFinished()), []);

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

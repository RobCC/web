import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';

import parser from './lineParser';
import styles from './editorLine.scss';
import { hasAnimationFinished, setAnimationFinished } from '#/store/ducks/editor';

const EditorLine = ({ lineNumber, shouldAnimate = false, line = '' }) => {
  const typingFinished = useSelector((store) => hasAnimationFinished(store));
  const dispatch = useDispatch();
  const lineClasses = classNames(styles.content, {
    [styles.comment]: parser.isComment(line),
    [styles.typeAnimated]: shouldAnimate && !typingFinished,
    [styles.caretAnimated]: shouldAnimate && typingFinished,
  });

  useEffect(() => () => {
    if (shouldAnimate && !typingFinished) {
      dispatch(setAnimationFinished());
    }
  }, []);

  return (
    <div className={styles.line}>
      <span className={styles.lineNumber}>{lineNumber}</span>
      <pre className={lineClasses}>
        <span className={styles.text}>{parser.parseLine(line)}</span>
      </pre>
    </div>
  );
};

EditorLine.propTypes = {
  shouldAnimate: PropTypes.bool,
  lineNumber: PropTypes.number,
  line: PropTypes.string,
};

export default EditorLine;

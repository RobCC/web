import { useEffect } from 'react';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';

import { hasAnimationFinished, animationFinished } from '#/store/ducks/editor';
import parser from './parser';
import styles from './editorLine.scss';

type Props = {
  lineNumber: number;
  shouldAnimate: boolean;
  line: string;
};

export default function EditorLine({
  lineNumber,
  shouldAnimate = false,
  line = '',
}: Props) {
  const dispatch = useDispatch();
  const typingFinished = useSelector(hasAnimationFinished);
  const lineClasses = classNames(styles.content, {
    [styles.comment]: parser.isComment(line),
    [styles.typeAnimated]: shouldAnimate && !typingFinished,
    [styles.caretAnimated]: shouldAnimate && typingFinished,
  });

  useEffect(
    () => () => {
      if (shouldAnimate && !typingFinished) {
        dispatch(animationFinished());
      }
    },
    [],
  );

  return (
    <div className={styles.line}>
      <span className={styles.lineNumber}>{lineNumber}</span>
      <pre className={lineClasses}>
        <span className={styles.text}>{parser.parseLine(line)}</span>
      </pre>
    </div>
  );
}

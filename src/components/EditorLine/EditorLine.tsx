import { useEffect } from 'react';
import classNames from 'classnames';

import { editor } from '#/store';
import parse, { isComment } from '#/utils/codeParser/index';
import styles from './editorLine.scss';

type Props = {
  /** Line number to be rendered */
  lineNumber: number;
  /** Determines if the line should used the typing animation */
  shouldAnimate: boolean;
  /** Line text to be rendered */
  line: string;
};

const { useEditorStore, getHasAnimationFinished, setAnimationFinished } =
  editor;

export default function EditorLine({
  lineNumber,
  shouldAnimate = false,
  line = '',
}: Props) {
  const typingFinished = useEditorStore(getHasAnimationFinished);
  const lineClasses = classNames(styles.content, {
    [styles.comment]: isComment(line),
    [styles.typeAnimated]: shouldAnimate && !typingFinished,
    [styles.caretAnimated]: shouldAnimate && typingFinished,
  });

  useEffect(
    () => () => {
      if (shouldAnimate && !typingFinished) {
        setAnimationFinished();
      }
    },
    [],
  );

  return (
    <div className={styles.line}>
      <span className={styles.lineNumber}>{lineNumber}</span>
      <pre className={lineClasses}>
        <span className={styles.text}>{parse(line, styles)}</span>
      </pre>
    </div>
  );
}

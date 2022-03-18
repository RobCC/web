import React, { useEffect, useRef } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import katex from 'katex';

import styles from './katex.scss';

export function Katex({ text = '', big = false }) {
  const ref = useRef();

  useEffect(() => {
    katex.render(text, ref.current, {
      throwOnError: false,
      output: 'html',
    });
  }, [text]);

  return (
    <div
      className={classNames(styles.katex, {
        [styles.big]: big,
      })}
      ref={ref}
    />
  );
}

Katex.propTypes = {
  text: PropTypes.string,
  big: PropTypes.bool,
};

export default Katex;

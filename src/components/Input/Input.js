import PropTypes from 'prop-types';
import React from 'react';

import styles from './input.scss';

const Input = ({ label = '', inputType, ...restProps }) => {
  let inputElement = null;

  switch (inputType) {
    case 'input':
      inputElement = <input className={styles.myInput} {...restProps} />;
      break;
    case 'textarea':
      inputElement = <textarea className={styles.myInput} {...restProps} />;
      break;
    default:
      inputElement = <input className={styles.myInput} {...restProps} />;
  }

  return (
    <div className={styles.inputElement}>
      <label htmlFor={restProps.id}>
        Surname
        {inputElement}
      </label>
    </div>
  );
};

Input.propTypes = {
  label: PropTypes.string,
  inputType: PropTypes.string,
};

export default Input;

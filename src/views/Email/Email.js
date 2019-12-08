import React from 'react';
import { useSelector } from 'react-redux';

import { email } from '#/store/ducks';
import styles from './email.scss';

const Email = () => {
  const isEmailOpen = useSelector((state) => email.isEmailOpen(state));

  return (
    <div className={styles.email} style={{ width: isEmailOpen ? 200 : 0 }}>Help me</div>
  );
};

export default Email;

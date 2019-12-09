import React from 'react';
import { useSelector } from 'react-redux';
import classNames from 'classnames';

import { email } from '#/store/ducks';
import linkedIn from '~/public/images/linkedIn.svg';
import styles from './email.scss';

const Email = () => {
  const isEmailOpen = useSelector((state) => email.isEmailOpen(state));
  const emailClasses = classNames(styles.email, { [styles.active]: isEmailOpen });

  return (
    <div className={emailClasses}>
      Help me
      {linkedIn}
    </div>
  );
};

export default React.memo(Email);

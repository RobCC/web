import React from 'react';
import { useSelector } from 'react-redux';
import classNames from 'classnames';

import SocialButton from 'Components/SocialButton/SocialButton';
import {
  Facebook,
  LinkedIn,
  GitHub,
} from 'Components/Icons';
import { email } from '#/store/ducks';
import styles from './email.scss';

const Email = () => {
  const isEmailOpen = useSelector((state) => email.isEmailOpen(state));
  const emailClasses = classNames(styles.email, { [styles.active]: isEmailOpen });

  return (
    <div className={emailClasses}>
      <SocialButton
        color="#0077b5"
        Icon={LinkedIn}
        title="LinkedIn"
        href="https://www.linkedin.com/in/jrobcc/"
      />
      <SocialButton
        color="#eee"
        Icon={GitHub}
        title="Github"
        href="https://github.com/RobCC"
        altIcon
      />
      <SocialButton
        color="#1777f2"
        Icon={Facebook}
        title="Facebook"
        href="https://www.facebook.com/jrobcc"
      />
    </div>
  );
};

export default React.memo(Email);

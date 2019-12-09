import React from 'react';
import { useSelector } from 'react-redux';
import classNames from 'classnames';

import SocialButton from './node_modules/Components/SocialButton/SocialButton';
import {
  Facebook,
  LinkedIn,
  GitHub,
  Gmail,
} from './node_modules/Components/Icons';
import { email } from './node_modules/#/store/ducks';
import styles from './email.scss';

const Contact = () => {
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
      <SocialButton
        color="#cd201f"
        size={25}
        Icon={Gmail}
        title="Gmail"
        href="https://mail.google.com/mail/?view=cm&fs=1&to=rrc0138@gmail.com"
      />
    </div>
  );
};

export default React.memo(Contact);

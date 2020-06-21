import React from 'react';
import PropTypes from 'prop-types';

import MailOutlineIcon from '@material-ui/icons/MailOutline';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';

import Photo from '../Photo/Photo';

import styles from './header.scss';
import me from '~/public/images/me.png';

const email = 'rrc0138@gmail';

const Header = ({ onScreen }) => (
  <div className={styles.header}>
    <div className={styles.personalInfo}>
      <div className={styles.info}>
        <MailOutlineIcon /> :
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={`https://mail.google.com/mail/u/0/?view=cm&amp;fs=1&amp;to=${email}&amp;tf=1`}
        >
          rrc0138@gmail.com
        </a>
      </div>
    </div>
    <Photo src={me} triggerAnimation={onScreen} />
    <div className={styles.networks}>
      <div className={styles.net}>
        <GitHubIcon />
      </div>
      <div className={styles.net}>
        <LinkedInIcon className={styles.linkedin} />
      </div>
      <div className={styles.net}>
        <FacebookIcon className={styles.facebook} />
      </div>
    </div>
  </div>
);

Header.propTypes = {
  onScreen: PropTypes.bool,
};

export default Header;
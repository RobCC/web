import React from 'react';
import PropTypes from 'prop-types';

import MailOutlineIcon from '@material-ui/icons/MailOutline';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';

import TabLink from 'Components/TabLink/TabLink';

import Photo from '../Photo/Photo';

import styles from './header.scss';
import me from '~/public/images/me.png';

const email = 'rrc0138@gmail';

const Header = ({ onScreen }) => (
  <div className={styles.header}>
    <div className={styles.personalInfo}>
      <div className={styles.info}>
        <MailOutlineIcon /> :
        <TabLink
          href={`https://mail.google.com/mail/u/0/?view=cm&amp;fs=1&amp;to=${email}&amp;tf=1`}
        >
          rrc0138@gmail.com
        </TabLink>
      </div>
    </div>
    <Photo src={me} triggerAnimation={onScreen} />
    <div className={styles.networks}>
      <div className={styles.net}>
        <TabLink href="https://github.com/RobCC">
          <GitHubIcon />
        </TabLink>
      </div>
      <div className={styles.net}>
        <TabLink href="https://www.linkedin.com/in/jrobcc/">
          <LinkedInIcon className={styles.linkedin} />
        </TabLink>
      </div>
      <div className={styles.net}>
        <TabLink href="https://www.facebook.com/jrobcc">
          <FacebookIcon className={styles.facebook} />
        </TabLink>
      </div>
    </div>
  </div>
);

Header.propTypes = {
  onScreen: PropTypes.bool,
};

export default Header;

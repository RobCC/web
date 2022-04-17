import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons/faFacebookF';
import { faSteamSymbol } from '@fortawesome/free-brands-svg-icons/faSteamSymbol';
import { faCodepen } from '@fortawesome/free-brands-svg-icons/faCodepen';
import { faNpm } from '@fortawesome/free-brands-svg-icons/faNpm';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons/faEnvelope';

import TabLink from '#/components/TabLink/TabLink';
import me from '~/public/images/me.png';
import Photo from '../Photo/Photo';

import styles from './header.scss';

const email = 'rrc0138@gmail';

function Header({ onScreen }) {
  return (
    <div className={styles.header}>
      <div className={styles.personalInfo}>
        <div className={styles.info}>
          <FontAwesomeIcon icon={faEnvelope} />:
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
            <FontAwesomeIcon icon={faGithub} />
          </TabLink>
        </div>
        <div className={styles.net}>
          <TabLink href="https://www.npmjs.com/~robcc">
            <FontAwesomeIcon icon={faNpm} className={styles.npm} />
          </TabLink>
        </div>
        <div className={styles.net}>
          <TabLink href="https://codepen.io/robcc/">
            <FontAwesomeIcon icon={faCodepen} />
          </TabLink>
        </div>
        <div className={styles.net}>
          <TabLink href="https://www.linkedin.com/in/jrobcc/">
            <FontAwesomeIcon icon={faLinkedinIn} className={styles.linkedin} />
          </TabLink>
        </div>
        <div className={styles.net}>
          <TabLink href="https://www.facebook.com/jrobcc">
            <FontAwesomeIcon icon={faFacebookF} className={styles.facebook} />
          </TabLink>
        </div>
        <div className={styles.net}>
          <TabLink href="https://steamcommunity.com/id/rrc0138/">
            <FontAwesomeIcon icon={faSteamSymbol} className={styles.steam} />
          </TabLink>
        </div>
      </div>
    </div>
  );
}

Header.propTypes = {
  onScreen: PropTypes.bool,
};

export default Header;

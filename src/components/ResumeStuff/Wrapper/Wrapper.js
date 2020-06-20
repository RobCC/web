import React from 'react';
import PropTypes from 'prop-types';

import Header from '../Header/Header';
import Photo from '../Photo/Photo';

import styles from './wrapper.scss';
import me from '~/public/images/me.png';

const Wrapper = ({ onScreen }) => (
  <div className={styles.wrapper}>
    <Header>
      <Photo src={me} triggerAnimation={onScreen} />
    </Header>
    <div>
      Hi
    </div>
  </div>
);

Wrapper.propTypes = {
  onScreen: PropTypes.bool,
};

export default Wrapper;

import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import styles from './photo.scss';

const Photo = ({ src, triggerAnimation }) => {
  const [photoStyles, setStyles] = useState(styles.photo);

  useEffect(() => {
    if (triggerAnimation) {
      setStyles(
        classNames(styles.photo, styles.removeBlur),
      );
    } else {
      setStyles(classNames(styles.photo));
    }
  }, [triggerAnimation]);

  return <img className={photoStyles} alt="Me" src={src} />;
};

Photo.propTypes = {
  src: PropTypes.string,
  triggerAnimation: PropTypes.bool,
};

export default Photo;

import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import styles from './photo.scss';

const Photo = ({ src, triggerAnimation }) => {
  const [photoStyles, setPhotoStyles] = useState(styles.photo);
  const orbit = classNames(styles.orbit, styles.spin);

  useEffect(() => {
    if (triggerAnimation) {
      setPhotoStyles(
        classNames(styles.photo, styles.removeBlur),
      );
    }
  }, [triggerAnimation]);

  return (
    <div className={`${styles.wrapper}`}>
      <img className={photoStyles} alt="Me" src={src} />
      <div className={orbit} />
    </div>
  );
};

Photo.propTypes = {
  src: PropTypes.string,
  triggerAnimation: PropTypes.bool,
};

export default Photo;

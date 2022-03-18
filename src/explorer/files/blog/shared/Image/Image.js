import PropTypes from 'prop-types';
import React from 'react';

import styles from './image.scss';

export function Image({ alt, src, scale = '1x', style = {} }) {
  return (
    <img
      className={styles.image}
      alt={alt}
      srcSet={`${src} ${scale}`}
      style={style}
    />
  );
}

Image.propTypes = {
  alt: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  scale: PropTypes.string,
  style: PropTypes.object,
};

export default Image;

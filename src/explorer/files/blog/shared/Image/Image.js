import PropTypes from 'prop-types';
import classNames from 'classnames';
import React from 'react';

import styles from './image.scss';

export function Image({ alt, src, scale = '1x', style = {}, center = false }) {
  return (
    <img
      className={classNames(styles.image, {
        [styles.center]: center,
      })}
      alt={alt}
      srcSet={`${src} ${scale}`}
      style={style}
    />
  );
}

Image.propTypes = {
  alt: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  center: PropTypes.bool,
  scale: PropTypes.string,
  style: PropTypes.object,
};

export default Image;

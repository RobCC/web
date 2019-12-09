import PropTypes from 'prop-types';
import React from 'react';

/* eslint-disable max-len */
const GitHub = ({ size = '1em', color }) => (
  <svg
    baseProfile="tiny"
    viewBox="0 0 24 24"
    fill={color}
    height={size}
    width={size}
  >
    <path d="M13 10h3v3h-3v7h-3v-7H7v-3h3V8.745c0-1.189.374-2.691 1.118-3.512C11.862 4.41 12.791 4 13.904 4H16v3h-2.1c-.498 0-.9.402-.9.899V10z" />
  </svg>
);

GitHub.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
};

export default GitHub;

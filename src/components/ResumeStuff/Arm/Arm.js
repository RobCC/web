import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import styles from './arm.scss';

/* eslint-disable max-len */
const Arm = ({ classes = '' }) => (
  <div className={classNames(styles.arm, classes)}>
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="208.14728682170517 194.9689922480619 256.7131782945737 89.27131782945742" width="252.71" height="85.27">
      <defs>
        <path d="M209.15 195.97L255.66 195.97L397.52 195.97L461.86 281.24" id="a1pvpx9c1X" />
      </defs>
      <g>
        <g>
          <g>
            <use xlinkHref="#a1pvpx9c1X" opacity="1" fillOpacity="0" stroke="#ffffff" strokeWidth="1" strokeOpacity="1" />
          </g>
        </g>
      </g>
    </svg>
  </div>
);

Arm.propTypes = {
  classes: PropTypes.string,
};

export default Arm;

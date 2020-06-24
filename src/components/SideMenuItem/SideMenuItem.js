import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './sideMenuItem.scss';

const MenuItem = ({
  title, selected, onClick, children,
}) => {
  const [isHovered, setHovered] = useState(false);
  const onMouseEnter = () => setHovered(true);
  const onMouseLeave = () => setHovered(false);

  const itemClasses = classNames(styles.item, {
    [styles.active]: selected,
  });

  const titleClasses = classNames(
    styles.title,
    isHovered ? styles.titleFadeIn : styles.titleFadeOut,
  );

  return (
    <div
      role="button"
      tabIndex={0}
      className={itemClasses}
      onClick={onClick}
      onKeyDown={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className={styles.icon}>
        {children}
      </div>
      {title && (
        <span className={titleClasses}>
          {title}
        </span>
      )}
    </div>
  );
};

MenuItem.propTypes = {
  title: PropTypes.string,
  selected: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node,
};

export default React.memo(MenuItem);

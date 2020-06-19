import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './sideMenuItem.scss';

const ICON_SIZE = 34;

const MenuItem = ({
  title, selected, onClick, Icon,
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
        <Icon size={ICON_SIZE} />
      </div>
      {title && isHovered && (
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
  Icon: PropTypes.elementType,
};

export default React.memo(MenuItem);

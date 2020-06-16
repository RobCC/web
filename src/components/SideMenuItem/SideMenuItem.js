import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './newMenuItem.scss';

const ICON_SIZE = 34;

const MenuItem = ({
  title, selected, onClick, Icon,
}) => {
  const [isHovered, setHovered] = useState(false);
  const onMouseEnter = () => setHovered(true);
  const onMouseLeave = () => setHovered(false);

  const textSize = {
    width: ICON_SIZE,
    height: ICON_SIZE,
  };

  const itemClasses = classNames(styles.item, {
    [styles.active]: selected,
  });

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
      {title && isHovered ? (
        <span style={textSize} className={styles.title}>
          {title}
        </span>
      ) : (
        <div className={styles.icon}>
          <Icon size={ICON_SIZE} />
        </div>
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

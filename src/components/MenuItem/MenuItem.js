import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ListItem, ListItemIcon } from '@material-ui/core';

import { useItemStyles } from './menuItem-styles';

const MenuItem = ({
  iconSize, title, selected, children, onClick,
}) => {
  const [isHovered, setHovered] = useState(false);
  const {
    root,
    itemTitle,
    itemIcon,
    selected: selectedClass,
  } = useItemStyles();

  const onMouseEnter = () => setHovered(true);
  const onMouseLeave = () => setHovered(false);

  const textSize = {
    width: iconSize,
    height: iconSize,
  };

  return (
    <ListItem
      button
      selected={selected}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      classes={{ root, selected: selectedClass }}
      onClick={onClick}
    >
      {title && isHovered ? (
        <span style={textSize} className={itemTitle}>
          {title}
        </span>
      ) : (
        <ListItemIcon classes={{ root: itemIcon }}>
          {children}
        </ListItemIcon>
      )}
    </ListItem>
  );
};

MenuItem.propTypes = {
  title: PropTypes.string,
  onClick: PropTypes.func,
  selected: PropTypes.bool,
  iconSize: PropTypes.number,
  children: PropTypes.node,
};

export default React.memo(MenuItem);

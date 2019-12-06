import React from 'react';
import PropTypes from 'prop-types';
import { ListItem, ListItemIcon } from '@material-ui/core';

import { useItemStyles, useIconStyles } from './menuItem-styles';

const MenuItem = ({ selected, children }) => {
  const iconClasses = useIconStyles();
  const itemClasses = useItemStyles();

  return (
    <ListItem button classes={itemClasses} selected={selected}>
      <ListItemIcon classes={iconClasses}>
        {children}
      </ListItemIcon>
    </ListItem>
  );
};

MenuItem.propTypes = {
  selected: PropTypes.bool,
  children: PropTypes.node,
};

export default MenuItem;

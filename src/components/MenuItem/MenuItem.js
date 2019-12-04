import React from 'react';
import PropTypes from 'prop-types';
import { ListItem, ListItemIcon } from '@material-ui/core';

import { useItemStyles, useIconStyles } from './menuItem-styles';

const MenuItem = ({ children }) => {
  const iconClasses = useIconStyles();
  const itemClasses = useItemStyles();

  return (
    <ListItem button classes={itemClasses}>
      <ListItemIcon classes={iconClasses}>
        {children}
      </ListItemIcon>
    </ListItem>
  );
};

MenuItem.propTypes = {
  children: PropTypes.node,
};

export default MenuItem;

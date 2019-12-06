import React from 'react';
import PropTypes from 'prop-types';
import { ListItem, ListItemIcon } from '@material-ui/core';

import { useItemStyles } from './menuItem-styles';

const MenuItem = ({ selected, children }) => {
  const itemClasses = useItemStyles();

  return (
    <ListItem button classes={itemClasses} selected={selected}>
      <ListItemIcon classes={{ root: itemClasses.itemIcon }}>
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

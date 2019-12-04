import React from 'react';
import generateId from 'uuid/v1';
import { Drawer, List } from '@material-ui/core';
import {
  Home,
  Person,
} from '@material-ui/icons';

import MenuItem from 'Components/MenuItem/MenuItem';
import { useDrawerStyles, useListStyles } from './menu-styles';

const menuIcons = [
  Home,
  Person,
];

const Menu = () => {
  const classes = useDrawerStyles();

  return (
    <Drawer
      className={classes.drawer}
      classes={{ paper: classes.paper }}
      variant="permanent"
    >
      <div>
        <List classes={useListStyles()}>
          {menuIcons.map((Icon) => (
            <MenuItem key={generateId()}>
              <Icon style={{ fontSize: 35 }} />
            </MenuItem>
          ))}
        </List>
      </div>
    </Drawer>
  );
};

export default Menu;

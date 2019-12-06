import PropTypes from 'prop-types';
import React from 'react';
import generateId from 'uuid/v1';
import { Drawer, List } from '@material-ui/core';
import { NavLink, withRouter } from 'react-router-dom';
import {
  Home,
  Person,
} from '@material-ui/icons';

import MenuItem from 'Components/MenuItem/MenuItem';
import { useDrawerStyles, useListStyles } from './menu-styles';

const menuIcons = [
  [Home, '/home'],
  [Person, '/about'],
];

const Menu = ({ location }) => {
  const classes = useDrawerStyles();

  return (
    <Drawer
      className={classes.drawer}
      classes={{ paper: classes.paper }}
      variant="permanent"
    >
      <List classes={useListStyles()}>
        {menuIcons.map(([Icon, route]) => (
          <NavLink key={generateId()} to={route} exact>
            <MenuItem selected={location.pathname.includes(route)}>
              <Icon style={{ fontSize: 35 }} />
            </MenuItem>
          </NavLink>
        ))}
      </List>
    </Drawer>
  );
};

Menu.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default withRouter(Menu);

import PropTypes from 'prop-types';
import React from 'react';
import generateId from 'uuid/v1';
import { Drawer, List } from '@material-ui/core';
import { NavLink, withRouter } from 'react-router-dom';
import {
  HomeOutlined,
  EmailOutlined,
  WorkOutlineOutlined,
} from '@material-ui/icons';

import MenuItem from 'Components/MenuItem/MenuItem';
import { useDrawerStyles, useListStyles } from './menu-styles';

const menuIcons = [
  [HomeOutlined, 'Home', '/home'],
  [WorkOutlineOutlined, 'Resume', '/resume'],
  [EmailOutlined, '', '/mail'],
];

const Menu = ({ location }) => {
  const isPathSelected = (route) => location.pathname.includes(route);
  const classes = useDrawerStyles();
  const fontSize = 34;

  return (
    <Drawer
      className={classes.drawer}
      classes={{ paper: classes.paper }}
      variant="permanent"
    >
      <List classes={useListStyles()}>
        {menuIcons.map(([Icon, title, route]) => (
          <NavLink key={generateId()} to={route} exact>
            <MenuItem selected={isPathSelected(route)} title={title} iconSize={fontSize}>
              <Icon style={{ fontSize }} />
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

export default withRouter(
  React.memo(Menu),
);

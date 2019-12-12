import PropTypes from 'prop-types';
import React from 'react';
import { Drawer, List } from '@material-ui/core';
import { NavLink, withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  HomeOutlined,
  PersonOutline,
  WorkOutlineOutlined,
} from '@material-ui/icons';

import MenuItem from 'Components/MenuItem/MenuItem';
import { email } from '#/store/ducks';
import { useDrawerStyles, useListStyles } from './menu-styles';

const fontSize = 34;

const Menu = ({ location }) => {
  const isPathSelected = (route) => location.pathname === route;
  const isEmailOpen = useSelector((state) => email.isEmailOpen(state));
  const dispatch = useDispatch();
  const classes = useDrawerStyles();

  const openEmail = () => dispatch(email.toggleEmail());

  return (
    <Drawer
      className={classes.drawer}
      classes={{ paper: classes.paper }}
      variant="permanent"
    >
      <List classes={useListStyles()}>
        <NavLink to="/" exact replace={location.pathname === '/'}>
          <MenuItem selected={isPathSelected('/')} title="Home" iconSize={fontSize}>
            <HomeOutlined style={{ fontSize }} />
          </MenuItem>
        </NavLink>
        <NavLink to="/resume" replace={location.pathname === '/resume'}>
          <MenuItem selected={isPathSelected('/resume')} title="Resume" iconSize={fontSize}>
            <WorkOutlineOutlined style={{ fontSize }} />
          </MenuItem>
        </NavLink>
        <MenuItem selected={isEmailOpen} title="Contact" iconSize={fontSize} onClick={openEmail}>
          <PersonOutline style={{ fontSize }} />
        </MenuItem>
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

import PropTypes from 'prop-types';
import React from 'react';
import { Drawer, List } from '@material-ui/core';
import { NavLink, withRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {
  HomeOutlined,
  EmailOutlined,
  WorkOutlineOutlined,
} from '@material-ui/icons';

import MenuItem from 'Components/MenuItem/MenuItem';
import { email } from '#/store/ducks';
import { useDrawerStyles, useListStyles } from './menu-styles';

const Menu = ({ location }) => {
  const isPathSelected = (route) => location.pathname.includes(route);
  const dispatch = useDispatch();
  const classes = useDrawerStyles();
  const fontSize = 34;

  const openEmail = () => dispatch(email.toggleEmail());

  return (
    <Drawer
      className={classes.drawer}
      classes={{ paper: classes.paper }}
      variant="permanent"
    >
      <List classes={useListStyles()}>
        <NavLink to="/home" exact>
          <MenuItem selected={isPathSelected('/home')} title="Home" iconSize={fontSize}>
            <HomeOutlined style={{ fontSize }} />
          </MenuItem>
        </NavLink>
        <NavLink to="/resume" exact>
          <MenuItem selected={isPathSelected('/resume')} title="Resume" iconSize={fontSize}>
            <WorkOutlineOutlined style={{ fontSize }} />
          </MenuItem>
        </NavLink>
        <MenuItem title="Email" iconSize={fontSize} onClick={openEmail}>
          <EmailOutlined style={{ fontSize }} />
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

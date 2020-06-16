import React from 'react';
import PropTypes from 'prop-types';
import { NavLink, withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  HomeOutlined,
  PersonOutline,
  WorkOutlineOutlined,
} from '@material-ui/icons';

import SideMenuItem from 'Components/SideMenuItem/SideMenuItem';
import { PATHS } from 'Components/Routes/MenuRoutes';

import { isEmailOpen, toggleEmail } from '#/store/ducks/email';

import styles from './sideMenu.scss';

const SideMenu = ({ location }) => {
  const dispatch = useDispatch();
  const isCurrentPath = (route) => location.pathname === route;
  const isEmailOpenSelector = useSelector((state) => isEmailOpen(state));

  const openEmail = () => dispatch(toggleEmail());

  return (
    <div className={styles.menu}>
      <NavLink to={PATHS.root} exact replace={location.pathname === PATHS.root}>
        <SideMenuItem
          title="Editor"
          selected={isCurrentPath('/')}
          Icon={HomeOutlined}
        />
      </NavLink>
      <NavLink to={PATHS.resume} replace={location.pathname === PATHS.resume}>
        <SideMenuItem
          title="Resume"
          selected={isCurrentPath('/resume')}
          Icon={WorkOutlineOutlined}
        />
      </NavLink>
      <SideMenuItem
        title="Contact"
        selected={isEmailOpenSelector}
        onClick={openEmail}
        Icon={PersonOutline}
      />
    </div>
  );
};

SideMenu.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default withRouter(
  React.memo(SideMenu),
);

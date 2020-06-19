import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { NavLink, withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import HomeOutlined from '@material-ui/icons/HomeOutlined';
import PersonOutline from '@material-ui/icons/PersonOutline';
import WorkOutlineOutlined from '@material-ui/icons/WorkOutlineOutlined';
import FileCopySharp from '@material-ui/icons/FileCopySharp';

import SideMenuItem from 'Components/SideMenuItem/SideMenuItem';
import { PATHS } from 'Components/Routes/MenuRoutes';

import { isEmailOpen as isEmailOpenFn, toggleEmail } from '#/store/ducks/email';
import { isExplorerOpen as isExplorerOpenFn, toggleExplorer } from '#/store/ducks/explorer';
import { toggleResume } from '#/store/ducks/resume';

import styles from './sideMenu.scss';

const SideMenu = ({ location }) => {
  const dispatch = useDispatch();
  const isCurrentPath = (route) => location.pathname === route;
  const isEmailOpen = useSelector((state) => isEmailOpenFn(state));
  const isExplorerOpen = useSelector((state) => isExplorerOpenFn(state));

  const openEmail = useCallback(() => {
    if (isExplorerOpen) {
      dispatch(toggleExplorer());
    }

    dispatch(toggleEmail());
  }, [isExplorerOpen]);

  const onResumeClick = useCallback(() => {
    dispatch(toggleResume());
  }, []);

  const onExplorerClick = useCallback(() => {
    if (isEmailOpen) {
      dispatch(toggleEmail());
    }

    dispatch(toggleExplorer());
  }, [isEmailOpen]);

  return (
    <div className={styles.menu}>
      <NavLink to={PATHS.root} exact replace={location.pathname === PATHS.root}>
        <SideMenuItem
          title="Editor"
          selected={isCurrentPath('/')}
          Icon={HomeOutlined}
        />
      </NavLink>
      <SideMenuItem
        title="Explorer"
        selected={isExplorerOpen}
        onClick={onExplorerClick}
        Icon={FileCopySharp}
      />
      <SideMenuItem
        title="Resume"
        selected={false}
        onClick={onResumeClick}
        Icon={WorkOutlineOutlined}
      />
      <SideMenuItem
        title="Contact"
        selected={isEmailOpen}
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

import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { NavLink, withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy, faFile, faUser } from '@fortawesome/free-regular-svg-icons';

import SideMenuItem from 'Components/SideMenuItem/SideMenuItem';
import { PATHS } from 'Components/Routes/MenuRoutes';

import { isEmailOpen as isEmailOpenFn, toggleEmail } from '#/store/ducks/email';
import { isExplorerOpen as isExplorerOpenFn, toggleExplorer } from '#/store/ducks/explorer';
import { toggleResume } from '#/store/ducks/resume';

import styles from './sideMenu.scss';

/* eslint-disable max-len */
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
        >
          <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="home" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
            <path fill="currentColor" d="M570.24 247.41L512 199.52V104a8 8 0 0 0-8-8h-32a8 8 0 0 0-7.95 7.88v56.22L323.87 45a56.06 56.06 0 0 0-71.74 0L5.76 247.41a16 16 0 0 0-2 22.54L14 282.25a16 16 0 0 0 22.53 2L64 261.69V448a32.09 32.09 0 0 0 32 32h128a32.09 32.09 0 0 0 32-32V344h64v104a32.09 32.09 0 0 0 32 32h128a32.07 32.07 0 0 0 32-31.76V261.67l27.53 22.62a16 16 0 0 0 22.53-2L572.29 270a16 16 0 0 0-2.05-22.59zM463.85 432H368V328a32.09 32.09 0 0 0-32-32h-96a32.09 32.09 0 0 0-32 32v104h-96V222.27L288 77.65l176 144.56z" className="" />
          </svg>
        </SideMenuItem>
      </NavLink>
      <SideMenuItem
        title="Explorer"
        selected={isExplorerOpen}
        onClick={onExplorerClick}
      >
        <FontAwesomeIcon icon={faCopy} />
      </SideMenuItem>
      <SideMenuItem
        title="Resume"
        selected={false}
        onClick={onResumeClick}
      >
        <FontAwesomeIcon icon={faFile} />
      </SideMenuItem>
      <SideMenuItem
        title="Contact"
        selected={isEmailOpen}
        onClick={openEmail}
      >
        <FontAwesomeIcon icon={faUser} />
      </SideMenuItem>
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

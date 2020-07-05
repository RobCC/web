import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy, faFile, faUser } from '@fortawesome/free-regular-svg-icons';

import SideMenuItem from 'Components/SideMenuItem/SideMenuItem';

import { isEmailOpen as isEmailOpenFn, toggleEmail } from '#/store/ducks/email';
import { isExplorerOpen as isExplorerOpenFn, toggleExplorer } from '#/store/ducks/explorer';
import { toggleResume } from '#/store/ducks/resume';

import styles from './sideMenu.scss';

/* eslint-disable max-len */
const SideMenu = () => {
  const dispatch = useDispatch();
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
      <SideMenuItem
        title="Explorer"
        selected={isExplorerOpen}
        onClick={onExplorerClick}
      >
        <FontAwesomeIcon icon={faCopy} />
      </SideMenuItem>
      <SideMenuItem
        title="Contact"
        selected={isEmailOpen}
        onClick={openEmail}
      >
        <FontAwesomeIcon icon={faUser} />
      </SideMenuItem>
      <SideMenuItem
        title="Resume"
        selected={false}
        onClick={onResumeClick}
      >
        <FontAwesomeIcon icon={faFile} />
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

import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy, faFile } from '@fortawesome/free-regular-svg-icons';

import SideMenuItem from 'Components/SideMenuItem/SideMenuItem';

import {
  isExplorerOpen as isExplorerOpenFn,
  toggleExplorer,
} from '#/store/ducks/explorer';
import { toggleResume } from '#/store/ducks/resume';

import styles from './sideMenu.scss';

function SideMenu() {
  const dispatch = useDispatch();
  const isExplorerOpen = useSelector((state) => isExplorerOpenFn(state));

  const onResumeClick = useCallback(() => {
    dispatch(toggleResume());
  }, []);

  const onExplorerClick = useCallback(() => {
    dispatch(toggleExplorer());
  }, []);

  return (
    <div className={styles.menu}>
      <SideMenuItem
        title="Explorer"
        selected={isExplorerOpen}
        onClick={onExplorerClick}
        style={{
          position: 'relative',
          left: '-2px',
        }}
      >
        <FontAwesomeIcon icon={faCopy} />
      </SideMenuItem>
      <SideMenuItem title="Resume" selected={false} onClick={onResumeClick}>
        <FontAwesomeIcon icon={faFile} />
      </SideMenuItem>
    </div>
  );
}

export default React.memo(SideMenu);

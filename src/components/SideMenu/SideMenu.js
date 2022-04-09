import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-regular-svg-icons/faCopy';
import { faFile } from '@fortawesome/free-regular-svg-icons/faFile';

import SideMenuItem from '#/components/SideMenuItem/SideMenuItem';

// TODO: change later
import { toggleExplorer, getIsExplorerOpen } from '#/store/modules/explorer.ts';
import { toggleResume } from '#/store/modules/resume.ts';

import styles from './sideMenu.scss';

function SideMenu() {
  const dispatch = useDispatch();
  const isExplorerOpen = useSelector(getIsExplorerOpen);

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

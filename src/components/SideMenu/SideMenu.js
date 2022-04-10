import React, { useCallback } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-regular-svg-icons/faCopy';
import { faFile } from '@fortawesome/free-regular-svg-icons/faFile';

import SideMenuItem from '#/components/SideMenuItem/SideMenuItem';

import useStore, {
  toggleExplorer,
  getIsExplorerOpen,
  toggleResume,
} from '#/store';
import styles from './sideMenu.scss';

function SideMenu() {
  const isExplorerOpen = useStore(getIsExplorerOpen);

  const onResumeClick = useCallback(() => {
    toggleResume();
  }, []);

  const onExplorerClick = useCallback(() => {
    toggleExplorer();
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

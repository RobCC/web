import { useCallback } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-regular-svg-icons/faCopy';
import { faFile } from '@fortawesome/free-regular-svg-icons/faFile';

import SideMenuItem from '#/components/SideMenuItem/SideMenuItem';
import { resume, explorer } from '#/store';
import styles from './sideMenu.scss';

const { useExplorerStore, getIsSideBarOpen, toggleSideBar } = explorer;
const { toggleResume } = resume;

export default function SideMenu() {
  const isSideBarOpen = useExplorerStore(getIsSideBarOpen);

  const onResumeClick = useCallback(() => {
    toggleResume();
  }, []);

  const onMenuItemClick = useCallback(() => {
    toggleSideBar();
  }, []);

  return (
    <div className={styles.menu}>
      <SideMenuItem
        title="Explorer"
        selected={isSideBarOpen} // TODO: check if both opened and selected item matches title
        onClick={onMenuItemClick}
        style={{
          position: 'relative',
          left: '-2px',
          borderLeftWidth: '4px',
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

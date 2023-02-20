import { useCallback } from 'react';

import SideMenuItem from '#/components/SideMenuItem/SideMenuItem';
import { IconResume, IconExplorer } from '#/components/Icones';
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
        <IconExplorer />
      </SideMenuItem>
      <SideMenuItem title="Resume" selected={false} onClick={onResumeClick}>
        <IconResume />
      </SideMenuItem>
    </div>
  );
}

import { IconExplorer } from '#/components/Icones';
import { explorer } from '#/store';

import ActivityBarItem from './ActivityBarItem';
import styles from './activityBar.module.scss';

const { toggleSideBar } = explorer;

export default function ActivityBar() {
  return (
    <div className={styles.bar}>
      <ActivityBarItem label="Explorer" onClick={toggleSideBar} isActive>
        <IconExplorer />
      </ActivityBarItem>
    </div>
  );
}

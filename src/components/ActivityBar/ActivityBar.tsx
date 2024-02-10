import { IconExplorer } from '#/components/Icones';
import { explorer } from '#/store';

import Item from './ActivityBarItem';
import styles from './activityBar.scss';

const { toggleSideBar } = explorer;

export default function ActivityBar() {
  return (
    <div className={styles.bar}>
      <Item label="Explorer" onClick={toggleSideBar} isActive>
        <IconExplorer />
      </Item>
    </div>
  );
}

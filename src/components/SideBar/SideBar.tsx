import classNames from 'classnames';

import { sideBar } from '#/store';

import styles from './sideBar.module.css';
import Explorer from './Explorer/Explorer';

const { useExplorerStore, isOpen } = sideBar;

/**
 * Collapsable side bar with files & folders
 */
export default function SideBar() {
  return (
    <div
      id="side-bar"
      className={classNames(styles.wrapper, {
        [styles.open]: useExplorerStore(isOpen),
      })}
    >
      <Explorer />
    </div>
  );
}

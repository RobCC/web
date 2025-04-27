import type { PropsWithChildren } from 'react';
import classNames from 'classnames';
import { IconExplorer } from '#/components/Icones';
import { explorer } from '#/store';

import styles from './activityBar.module.css';

type ActBarItemProps = {
  label: string;
  isActive?: boolean;
  onClick: () => void;
};

function ActBarItem({
  label,
  isActive,
  onClick,
  children,
}: PropsWithChildren<ActBarItemProps>) {
  return (
    <button
      aria-label={label}
      className={classNames(styles.item, {
        [styles.active]: isActive,
      })}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

/**
 * The left-most bar in the application, which contains icons for different views.
 *
 * TODO: Tooltip á la VSCode
 */
export default function ActivityBar() {
  return (
    <div className={styles.bar}>
      <ActBarItem label="Explorer" onClick={explorer.toggleSideBar} isActive>
        <IconExplorer />
      </ActBarItem>
    </div>
  );
}

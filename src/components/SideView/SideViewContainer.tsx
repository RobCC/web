import type { PropsWithChildren } from 'react';
import classNames from 'classnames';

import useStore, { getIsExplorerOpen } from '#/store';

import styles from './sideExplorerView.scss';

export default function SideExplorerView({ children }: PropsWithChildren<{}>) {
  const isExplorerOpen = useStore(getIsExplorerOpen);

  return (
    <div
      className={classNames(styles.explorer, {
        [styles.active]: isExplorerOpen,
      })}
    >
      {children}
    </div>
  );
}

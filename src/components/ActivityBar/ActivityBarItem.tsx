import type { PropsWithChildren } from 'react';
import classNames from 'classnames';

import styles from './activityBar.scss';

type ItemProps = {
  label: string;
  isActive?: boolean;
  onClick(): void;
};

export default function Item({
  label,
  isActive,
  onClick,
  children,
}: PropsWithChildren<ItemProps>) {
  return (
    <div className={styles.bar}>
      <button
        type="button"
        aria-label={label}
        className={classNames(styles.item, {
          [styles.active]: isActive,
        })}
        onClick={onClick}
      >
        {children}
      </button>
    </div>
  );
}

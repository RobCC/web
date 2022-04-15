import classNames from 'classnames';

import { handleOnKeyDownButton } from '#/utils/a11y';

import styles from './sideMenuItem.scss';

type Props = {
  title: string;
  selected?: boolean;
  onClick: () => void;
  children: React.ReactNode;
  style?: React.CSSProperties;
};

export default function MenuItem({
  title,
  selected,
  onClick,
  children,
  style = {},
}: Props) {
  return (
    <div
      role="button"
      title={title}
      tabIndex={0}
      className={classNames(styles.item, {
        [styles.active]: selected,
      })}
      onClick={onClick}
      onKeyDown={handleOnKeyDownButton(onClick)}
      style={style}
    >
      <div className={styles.icon}>{children}</div>
      {title && <span className={styles.title}>{title}</span>}
    </div>
  );
}

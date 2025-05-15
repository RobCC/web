import classNames from 'classnames';

import { FILE_ICONS } from '#/utils/constants';

import styles from './extensionIcon.module.css';

type Props = {
  extension: Extension;
  className?: string;
};

export default function ExtensionIcon({ extension, className = '' }: Props) {
  const Icon = FILE_ICONS[extension];

  return (
    <div className={classNames(styles.icon, styles[extension], className)}>
      <Icon />
    </div>
  );
}

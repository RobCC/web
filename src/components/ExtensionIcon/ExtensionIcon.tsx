import classNames from 'classnames';

import { FILE_ICONS } from '#/utils/constants';

import styles from './extensionIcon.module.css';

type Props = {
  extension: Extension;
  shortName: string;
  className?: string;
};

export default function ExtensionIcon({
  extension,
  shortName,
  className = '',
}: Props) {
  const Icon = FILE_ICONS[extension || shortName];

  return (
    <div className={classNames(styles.icon, styles[extension], className)}>
      <Icon />
    </div>
  );
}

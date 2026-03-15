import clsx from 'clsx';

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
  const identifier = (extension || shortName).toLocaleLowerCase();
  const Icon = FILE_ICONS[identifier as keyof typeof FILE_ICONS];

  return (
    <div className={clsx(styles.icon, styles[identifier], className)}>
      <Icon />
    </div>
  );
}

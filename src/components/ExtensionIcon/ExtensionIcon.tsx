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
  const classNames = [styles.icon, className, styles[identifier]];
  let Icon = FILE_ICONS[identifier as keyof typeof FILE_ICONS];

  if (shortName === 'README.md') {
    Icon = FILE_ICONS.readme;

    classNames.pop();
    classNames.push(styles.readme);
  }

  return (
    <div className={clsx(classNames)}>
      <Icon />
    </div>
  );
}

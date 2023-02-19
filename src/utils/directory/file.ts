import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import classNames from 'classnames';

import { FILE_EXTENSION_REGEX, FILE_ICONS } from '#/utils/constants';
import styles from '#/styles/icons.scss';

export type File = {
  readonly type: 'file';
  readonly name: string;
  readonly content: Code | React.FC<unknown>;
  readonly metadata: {
    extension: Extension;
    icon: string | IconDefinition;
    iconStyles: string;
    isIconString: boolean;
  };
};

function getIconClassnames(extension: string, isStringIcon: boolean) {
  return classNames({
    [styles.icon]: isStringIcon,
    [styles.logoIcon]: !isStringIcon,
    [styles.js]: extension === 'js',
    [styles.css]: extension === 'css',
    [styles.md]: extension === 'md',
    [styles.json]: extension === 'json',
    [styles.txt]: extension === 'txt',
  });
}

function getExtension(name: string) {
  const [, extension] = name.match(FILE_EXTENSION_REGEX);

  return extension as Extension;
}

function getIsIconString(icon: string | IconDefinition): icon is string {
  return typeof icon === 'string';
}

function getMetadata(name: string) {
  const extension = getExtension(name);
  const icon: string | IconDefinition = FILE_ICONS[extension] || '';
  const isIconString = getIsIconString(icon);
  const iconStyles = getIconClassnames(extension, isIconString);

  return {
    extension,
    icon,
    iconStyles,
    isIconString,
  };
}

export function create(name: string, content: File['content']): File {
  const metadata = getMetadata(name);

  return {
    type: 'file',
    name,
    content,
    metadata,
  };
}

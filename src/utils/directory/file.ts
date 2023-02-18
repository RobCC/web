import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import classNames from 'classnames';

import { FILE_EXTENSION_REGEX, FILE_ICONS } from '#/utils/constants';
import styles from '#/styles/icons.scss';

export function create(name: string, content: FileContent): AppFile2 {
  return {
    type: 'file',
    name,
    content,
  };
}

function getIconClassnames(extension, isStringIcon) {
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
  const [, extension] = name.match(FILE_EXTENSION_REGEX) || [];

  return extension;
}

export function isIconString(icon: string | IconDefinition): icon is string {
  return typeof (icon as string) === 'string';
}

export function getMetadata(name: string) {
  const extension = getExtension(name);
  const icon: string | IconDefinition = FILE_ICONS[extension] || '';
  const iconStyles = getIconClassnames(extension, isIconString(icon));

  return {
    extension,
    icon,
    iconStyles,
  };
}


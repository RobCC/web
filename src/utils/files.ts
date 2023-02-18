import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import classNames from 'classnames';

import styles from '#/styles/icons.scss';
import rootFiles from '#/files';
import { EXTENSION_REGEX, ICONS } from './constants';

function getIconStyles(extension, isStringIcon) {
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

function getFileExtension(name: string) {
  const [, extension] = name.match(EXTENSION_REGEX) || [];

  return extension;
}

// TODO: remove
function checkIsFolder(content: AppFileContent | AppFolder) {
  return content instanceof Map;
}

// TODO: remove
export function getShortName(fullName: string) {
  const lastSlashIndex = fullName.lastIndexOf('/');
  const isRoot = lastSlashIndex === -1;

  if (isRoot) {
    return fullName;
  }

  return fullName.slice(lastSlashIndex + 1);
}

export function isIconString(icon: string | IconDefinition): icon is string {
  return typeof (icon as string) === 'string';
}

export function getFileMetadata(name: string) {
  const extension = getFileExtension(name);
  const icon: string | IconDefinition = ICONS[extension] || '';
  const iconStyles = getIconStyles(extension, isIconString(icon));

  return {
    extension,
    icon,
    iconStyles,
  };
}


export function getFileContentFromFullName(fullName: string) {
  const paths = fullName.split('/');
  // eslint-disable-next-line prefer-destructuring
  let fileFolder: AppFile2 | Folder = rootFiles;

  for (let i = 0; i < paths.length; i += 1) {
    const path = paths[i];

    fileFolder = fileFolder.get(path);

    if (fileFolder.type === 'file') {
      return fileFolder.content;
    }
  }

  return null;
}

// TODO: remove
export function getFolderContent(items: AppFolder[1]) {
  const names = [...items.keys()];

  return names.reduce<[string[], string[]]>(
    ([files, folders], name) => {
      const content = items.get(name) as AppFileContent | AppFolder;
      const isFolder = checkIsFolder(content);

      return [
        [...files, ...(!isFolder ? [name] : [])],
        [...folders, ...(isFolder ? [name] : [])],
      ];
    },
    [[], []],
  );
}

export default {
  getShortName,
  getFileMetadata,
  getFileContentFromFullName,
  getFolderContent,
};

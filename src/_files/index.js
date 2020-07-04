import classNames from 'classnames';
import { faInfo } from '@fortawesome/free-solid-svg-icons';

import greet from './greet';
import contact from './contact';
import test from './test';

import styles from './icons.scss';

const EXTENSION_REGEX = new RegExp(/\.([0-9a-z]+)$/);

const icons = {
  js: 'JS',
  css: '#',
  json: '{}',
  md: faInfo,
};

// Files are arrays of 2 items, [name, content]
// Files without content are considered groups
function setGroup(name) {
  return [name, false];
}

const files = new Map([
  greet,
  contact,
  setGroup('/Test group'),
]);

function getIconStyles(extension, isStringIcon) {
  return classNames({
    [styles.icon]: isStringIcon,
    [styles.logoIcon]: !isStringIcon,
    [styles.js]: isStringIcon && extension === 'js',
    [styles.css]: isStringIcon && extension === 'css',
    [styles.md]: extension === 'md',
    [styles.json]: extension === 'json',
  });
}

export function getShortName(fullName) {
  const paths = fullName.split('/');
  const fileName = paths.pop();

  return [fileName, paths];
}

function getExtension(fullName) {
  const [name] = getShortName(fullName);
  const [, extension] = name.match(EXTENSION_REGEX) || [];

  return extension;
}

export function getFileIcon(fullName) {
  const extension = getExtension(fullName);
  const icon = icons[extension] || '';
  const isStringIcon = typeof icon === 'string';
  const iconStyles = getIconStyles(extension, isStringIcon);

  return {
    extension, icon, iconStyles, isStringIcon,
  };
}

function getFilesAndGroups(mixedFileNames) {
  return mixedFileNames.reduce(([fFiles, fGroups], name) => {
    const content = files.get(name);

    return [[
      ...fFiles,
      ...(content ? [name] : []),
    ], [
      ...fGroups,
      ...(!content ? [name] : []),
    ],
    ];
  }, [[], []]);
}

export function getRootFiles() {
  const fileNames = [...files.keys()];
  const rootFiles = fileNames.filter((name) => name.startsWith('/'));

  return getFilesAndGroups(rootFiles);
}

export function getItemsByGroup(path) {
  const subItemsRegex = new RegExp(`^${path}\\/.+?$`);
  const fileNames = [...files.keys()];
  const subItems = fileNames.filter((name) => !!name.match(subItemsRegex));

  return getFilesAndGroups(subItems);
}

export default files;

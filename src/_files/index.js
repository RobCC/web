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

const files = new Map([
  greet,
  contact,
  test,
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

export function getFileName(fullName) {
  const paths = fullName.split('/');
  const fileName = paths.pop();

  return [fileName, paths];
}

function getExtension(fullName) {
  const [name] = getFileName(fullName);
  const [, extension] = name.match(EXTENSION_REGEX) || {};

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

export default files;

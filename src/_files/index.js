import greet from './greet';
import contact from './contact';

const EXTENSION_REGEX = new RegExp(/\.([0-9a-z]+)$/);

const icons = {
  js: 'JS',
  css: '#',
};

const files = new Map([
  greet,
  contact,
]);

export function getFileName(fullName) {
  const paths = fullName.split('/');
  const fileName = paths.pop();

  return [fileName, paths];
}

export function getFileIcon(fullName) {
  const [name] = getFileName(fullName);
  const [, extension] = name.match(EXTENSION_REGEX) || {};

  return icons[extension] || '';
}

export default files;

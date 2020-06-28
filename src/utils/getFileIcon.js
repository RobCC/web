const EXTENSION_REGEX = new RegExp(/\.([0-9a-z]+)$/);

const icons = {
  js: 'JS',
  css: '#',
};

export default (name) => {
  const [, extension] = name.match(EXTENSION_REGEX) || {};

  return icons[extension] || '';
};

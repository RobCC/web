const EXTENSION_REGEX = new RegExp(/\.([0-9a-z]+)$/);

export default class File {
  constructor(name, content) {
    this.name = name;
    this.content = content;
    this.parent = '/';
  }

  setParent(parent) {
    this.parent = parent;
  }

  getName() {
    return this.name;
  }

  getExtension() {
    const [, extension] = this.name.match(EXTENSION_REGEX) || [];

    return extension;
  }

  getContent() {
    return this.content;
  }
}

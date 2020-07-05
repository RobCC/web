import File from './File';

// TODO: No longer needed?
export default class Folder {
  constructor(name, files = [], parent = '/') {
    this.name = name;
    this.parent = parent;

    this.files = files.map((file) => file.setParent(this));
  }

  setParent(parent) {
    this.parent = parent;
  }

  getName() {
    return this.name;
  }

  getFiles() {
    return this.files;
  }
}

import type { File } from './file';

export type Folder = {
  readonly type: 'folder';
  readonly name: string;
  readonly content: {
    files: File[];
    folders: Folder[];
  };
  get(name: string): File | Folder;
};

function filterFileFolder(content: Array<File | Folder>) {
  return content.reduce<Folder['content']>(
    ({ files, folders }, fileOrFolder) => {
      const isFolder = fileOrFolder.type === 'folder';

      return {
        files: [...files, ...(!isFolder ? [fileOrFolder] : [])],
        folders: [...folders, ...(isFolder ? [fileOrFolder] : [])],
      };
    },
    { files: [], folders: [] },
  );
}

/**
 * NOTE: Refactor to accept array of files and folders separately?
 * Instead of filtering them in the go
 */
export function create(name: string, content?: (File | Folder)[]): Folder {
  return {
    type: 'folder',
    name,
    content: filterFileFolder(content),
    get(contentName: string) {
      const allContent = Object.values(this.content).flat();

      return allContent.find(f => f.name === contentName);
    },
  };
}

export default {
  create,
};

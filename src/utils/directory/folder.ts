export function create(name: string, content?: Folder['content']): Folder {
  return {
    type: 'folder',
    name,
    content,
    get(contentName: string) {
      return content.find(f => f.name === contentName);
    },
  };
}

export function filterFileFolder(folder: Folder) {
  return folder.content.reduce<[AppFile2[], Folder[]]>(
    ([files, folders], fileOrFolder) => {
      const isFolder = fileOrFolder.type === 'folder';

      return [
        [...files, ...(!isFolder ? [fileOrFolder] : [])],
        [...folders, ...(isFolder ? [fileOrFolder] : [])],
      ];
    },
    [[], []],
  );
}

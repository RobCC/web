import type { File } from './file';
import type { Folder } from './folder';

export default function getFileFromFullName(fullName: string, folder: Folder) {
  if (!fullName) {
    return null;
  }

  const paths = fullName.split('/');
  let fileFolder: File | Folder = folder;

  for (let i = 0; i < paths.length; i += 1) {
    const path = paths[i];

    fileFolder = fileFolder.get(path);

    if (fileFolder.type === 'file') {
      return fileFolder;
    }
  }

  return null;
}

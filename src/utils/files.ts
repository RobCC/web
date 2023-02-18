import rootFiles from '#/files';


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


export default {
  getFileContentFromFullName,
};

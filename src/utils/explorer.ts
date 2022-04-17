export function createFile(fileName: string, File: AppFileContent): AppFile {
  return [fileName, File];
}

export function createFolderAndContent(
  forderName: string,
  ...contentMap: Array<[string, AppFileContent | AppFolderContent]>
): AppFolder {
  return [forderName, new Map(contentMap)];
}

export function createExplorerRoot(
  ...contentMap: Array<[string, AppFileContent | AppFolderContent]>
): AppFolderContent {
  return new Map(contentMap);
}

export default {
  createFile,
  createFolderAndContent,
  createExplorerRoot,
};

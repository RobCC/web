export function createFile(fileName, Component) {
  return [fileName, Component];
}

export function createFolderAndContent(forderName, contentMap) {
  return [forderName, new Map([...contentMap])];
}

export function createExplorerRoot(contentMap) {
  return new Map([...contentMap]);
}

export default {
  createFile,
  createFolderAndContent,
  createExplorerRoot,
};

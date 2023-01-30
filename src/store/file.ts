import useStore, { RootState } from './store';

export const getCurrentFile = ({ file }: RootState) => file.currentTab;

export const getOpenedFiles = ({ file }: RootState) => file.openedFiles;

export function closeFile(fileName: string) {
  useStore.setState(state => {
    const indexOfFile = state.file.openedFiles.indexOf(fileName);

    if (indexOfFile === -1) {
      return;
    }

    state.file.openedFiles.splice(indexOfFile, 1);

    // if the tab we're closing is the current, move to the last tab (if any)
    if (fileName === state.file.currentTab) {
      const { openedFiles } = state.file;
      const previousTab = openedFiles[openedFiles.length - 1];

      state.file.currentTab = previousTab ?? '';
    }
  });
}

export function openFile(fileName: string) {
  useStore.setState(state => {
    const isFileAlreadyOpen = state.file.openedFiles.indexOf(fileName) > -1;

    state.file.currentTab = fileName;

    if (!isFileAlreadyOpen) {
      state.file.openedFiles.push(fileName);
    }
  });
}

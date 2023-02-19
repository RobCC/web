import { getFileFromFullName, fileUtils } from '#/utils/directory';
import rootFiles from '#/files';
import { createStore } from './store';

export type State = {
  currentFile: fileUtils.File | null;
  currentFileFullName: string;
  openedFileFullNames: string[];
};

function getInitialFile() {
  const [, encodedFile = ''] = window.location.hash.split('file=');
  const file = decodeURIComponent(encodedFile);

  return file || 'README.md';
}

export const useFileStore = createStore({
  currentFile: getFileFromFullName(getInitialFile(), rootFiles),
  currentFileFullName: getInitialFile(),
  openedFileFullNames: ['README.md', 'contact.css', 'Blog/cleaning_up.txt'],
});

export function openFile(fileFullName: string) {
  useFileStore.setState(state => {
    const isFileAlreadyOpen =
      state.openedFileFullNames.indexOf(fileFullName) > -1;

    state.currentFile = getFileFromFullName(fileFullName, rootFiles);
    state.currentFileFullName = fileFullName;

    if (!isFileAlreadyOpen) {
      state.openedFileFullNames.push(fileFullName);
    }
  });
}

export function closeFile(fileFullName: string) {
  useFileStore.setState(state => {
    const indexOfFile = state.openedFileFullNames.indexOf(fileFullName);

    if (indexOfFile === -1) {
      return;
    }

    state.openedFileFullNames.splice(indexOfFile, 1);

    // if the tab we're closing is the current, move to the last tab (if any)
    if (fileFullName === state.currentFile.name) {
      const { openedFileFullNames } = state;
      const previousTab =
        openedFileFullNames[openedFileFullNames.length - 1] ?? '';

      state.currentFile = getFileFromFullName(previousTab, rootFiles);
      state.currentFileFullName = previousTab;
    }
  });
}

export const getCurrentFile = ({
  currentFile,
  currentFileFullName,
}: State) => ({
  ...currentFile,
  fullName: currentFileFullName,
});

export const getCurrentFileFullName = ({ currentFileFullName }: State) =>
  currentFileFullName;

export const getOpenedFileNames = ({ openedFileFullNames }: State) =>
  openedFileFullNames;

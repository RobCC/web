import { getFileFromFullName, fileUtils } from '#/utils/directory';
import rootFiles from '#/files';
import { createStore } from './store';

export type State = {
  /** Current file and its fullname. */
  current: {
    file: fileUtils.File | null;
    fullName: string;
  };
  /** List of active file's fullnames. */
  activeFiles: string[];
};

function getInitialFile() {
  const [, encodedFile = ''] = window.location.hash.split('file=');
  const file = decodeURIComponent(encodedFile);

  return file || 'README.md';
}

export const useFileStore = createStore<State>({
  current: {
    file: getFileFromFullName(getInitialFile(), rootFiles),
    fullName: getInitialFile(),
  },
  activeFiles: ['README.md', 'contact.css', 'Blog/cleaning_up.txt'],
});

export function openFile(fullName: string) {
  useFileStore.setState(state => {
    state.current.file = getFileFromFullName(fullName, rootFiles);
    state.current.fullName = fullName;

    const isFileAlreadyOpen = state.activeFiles.indexOf(fullName) > -1;

    if (!isFileAlreadyOpen) {
      state.activeFiles.push(fullName);
    }
  });
}

export function closeFile(fullName: string) {
  useFileStore.setState(state => {
    const indexOfFile = state.activeFiles.indexOf(fullName);

    if (indexOfFile === -1) {
      return;
    }

    state.activeFiles.splice(indexOfFile, 1);

    // if the tab we're closing is the current, move to the last tab (if any)
    if (fullName === state.current.fullName) {
      const { activeFiles } = state;
      const previousTab = activeFiles[activeFiles.length - 1] ?? '';

      state.current.file = getFileFromFullName(previousTab, rootFiles);
      state.current.fullName = previousTab;
    }
  });
}

export const getCurrentFile = ({ current }: State) => {
  if (!current.file) {
    return null;
  }

  return {
    ...current.file,
    fullName: current.fullName,
  };
};

export const getCurrentFullName = ({ current }: State) => current.fullName;

export const getActiveFiles = ({ activeFiles }: State) => activeFiles;

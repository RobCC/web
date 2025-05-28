import { getFile, fileUtils } from '#/utils/directory';
import root from '#/files';
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

export const useFileStore = createStore<State>({
  current: {
    file: null,
    fullName: '',
  },
  activeFiles: ['README.md', 'contact.css', 'Blog/cleaning_up.txt'],
});

export function openFile(fullName: string) {
  useFileStore.setState(state => {
    const file = getFile(fullName, root);

    if (!file) {
      console.error(`File ${fullName} not found`);

      return;
    }

    state.current.file = file;
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

    // if the tab we're closing is the current, move to the previous tab (if any)
    if (fullName === state.current.fullName) {
      const { activeFiles } = state;
      const previousTab = activeFiles[activeFiles.length - 1] ?? '';

      if (previousTab) {
        location.hash = `#/${encodeURIComponent(previousTab)}`;
      } else {
        state.current.file = getFile(previousTab, root);
        state.current.fullName = previousTab;
      }
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

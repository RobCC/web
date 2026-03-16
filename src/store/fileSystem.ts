import { getFile, fileUtils } from '#/utils/directory';
import root from '#/files';
import { createStore } from './store';

type State = {
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
  activeFiles: ['README.md', 'contact.css', 'Blog/cleaning_up.md'],
});

export function openFile(fullName: string) {
  useFileStore.setState(state => {
    const file = getFile(fullName, root);

    if (!file) {
      console.error(`File ${fullName} not found`);

      return state;
    }

    const isFileAlreadyOpen = state.activeFiles.indexOf(fullName) > -1;

    return {
      current: { file, fullName },
      activeFiles: isFileAlreadyOpen
        ? state.activeFiles
        : [...state.activeFiles, fullName],
    };
  });
}

export function closeFile(fullName: string) {
  useFileStore.setState(state => {
    const indexOfFile = state.activeFiles.indexOf(fullName);

    if (indexOfFile === -1) {
      return state;
    }

    const activeFiles = state.activeFiles.filter(f => f !== fullName);

    // if the tab we're closing is the current, move to the previous tab (if any)
    if (fullName === state.current.fullName) {
      const previousTab = activeFiles[activeFiles.length - 1] ?? '';

      if (previousTab) {
        location.hash = `#/${encodeURIComponent(previousTab)}`;
        return { activeFiles };
      }

      return {
        activeFiles,
        current: { file: getFile(previousTab, root), fullName: previousTab },
      };
    }

    return { activeFiles };
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

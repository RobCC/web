import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

type EditorState = {
  hasAnimationFinished: boolean;
};

type ExplorerState = {
  isExplorerOpen: boolean;
};

type FileState = {
  currentTab: string;
  openedFiles: string[];
};

type ResumeState = {
  isResumeOpen: boolean;
};

export type RootState = {
  editor: EditorState;
  explorer: ExplorerState;
  file: FileState;
  resume: ResumeState;
};

function getFileFromUrl() {
  const [, file = ''] = window.location.hash.split('file=');

  return decodeURIComponent(file);
}

const useStore = create(
  immer<RootState>(() => ({
    editor: {
      hasAnimationFinished: false,
    },
    explorer: {
      isExplorerOpen: false,
    },
    file: {
      currentTab: getFileFromUrl() || 'README.md',
      openedFiles: ['README.md', 'contact.css', 'Blog/cleaning_up.txt'],
    },
    resume: {
      isResumeOpen: false,
    },
  })),
);

export default useStore;

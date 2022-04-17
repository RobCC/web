import create from 'zustand';
import getFileParam from '#/utils/getFileParam';

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

const useStore = create<RootState>(() => ({
  editor: {
    hasAnimationFinished: false,
  },
  explorer: {
    isExplorerOpen: false,
  },
  file: {
    currentTab: getFileParam() || 'README.md',
    openedFiles: ['README.md', 'contact.css', 'Blog/cleaning_up.txt'],
  },
  resume: {
    isResumeOpen: false,
  },
}));

export default useStore;

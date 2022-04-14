import create from 'zustand';

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
    currentTab: 'greet.md',
    openedFiles: [
      'greet.md',
      'contact.css',
      'Blog/animation_and_positioning.txt',
    ],
  },
  resume: {
    isResumeOpen: false,
  },
}));

export default useStore;

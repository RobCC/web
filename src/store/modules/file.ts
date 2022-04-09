import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import type { RootState } from "..";

type FileState = {
  currentTab: string
  openedFiles: string[]
}

const initialState: FileState = {
  currentTab: 'greet.md',
  openedFiles: ['greet.md', 'contact.css', 'Blog/animation_and_positioning.txt'],
};

export const {
  reducer,
  actions: {
    changeFile,
    closeFile,
    openChangeFile,
  },
} = createSlice({
  name: 'file',
  initialState,
  reducers: {
    changeFile: (state, { payload }: PayloadAction<string>) => {
      state.currentTab = payload;
    },
    closeFile: (state, { payload }: PayloadAction<string>) => {
      const indexOfFile = state.openedFiles.indexOf(payload);

      if (indexOfFile === -1) {
        return;
      }

      state.openedFiles.splice(indexOfFile, 1);
      state.currentTab = state.openedFiles[state.openedFiles.length - 1] || '';
    },
    openChangeFile: (state, { payload }: PayloadAction<string>) => {
      const isFileAlreadyOpen = state.openedFiles.indexOf(payload) > -1;

      state.currentTab = payload;

      if (!isFileAlreadyOpen) {
        state.openedFiles.push(payload);
      }
    },
  },
});

export const getCurrentFile = ({ file }: RootState) => file.currentTab;
export const getOpenedFiles = ({ file }: RootState) => file.openedFiles;

export default reducer;

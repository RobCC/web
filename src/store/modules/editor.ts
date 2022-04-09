import { createSlice } from '@reduxjs/toolkit';

import type { RootState } from "..";

type EditorState = {
  hasAnimationFinished: boolean;
}

const initialState: EditorState = {
  hasAnimationFinished: false,
};

export const {
  reducer,
  actions: {
    setAnimationFinished,
  },
} = createSlice({
  name: 'editor',
  initialState,
  reducers: {
    setAnimationFinished: (state) => {
      state.hasAnimationFinished = true;
    },
  },
});

export const hasAnimationFinished = ({ editor }: RootState) => editor.hasAnimationFinished;

export default reducer;

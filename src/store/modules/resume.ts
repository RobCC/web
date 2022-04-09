import { createSlice } from '@reduxjs/toolkit';

import type { RootState } from "..";

type ResumeState = {
  isResumeOpen: boolean
}

const initialState: ResumeState = {
  isResumeOpen: false,
};

export const {
  reducer,
  actions: {
    toggleResume,
  },
} = createSlice({
  name: 'resume',
  initialState,
  reducers: {
    toggleResume: (state) => {
      state.isResumeOpen = !state.isResumeOpen;
    },
  },
});

export const getIsResumeOpen = ({ resume }: RootState) => resume.isResumeOpen;

export default reducer;

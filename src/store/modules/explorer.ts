import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import type { RootState } from "..";

type ExplorerState = {
  isExplorerOpen: boolean;
}

const initialState: ExplorerState = {
  isExplorerOpen: false,
};

export const {
  reducer,
  actions: {
    toggleExplorer,
  },
} = createSlice({
  name: 'explorer',
  initialState,
  reducers: {
    toggleExplorer: (state, { payload }: PayloadAction<boolean>) => {
      state.isExplorerOpen = !payload;
    },
  },
});

export const getIsExplorerOpen = ({ explorer }: RootState) => explorer.isExplorerOpen;

export default reducer;

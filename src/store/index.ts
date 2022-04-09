import { configureStore } from '@reduxjs/toolkit';

import editor from './modules/editor';
import explorer from './modules/explorer';
import file from './modules/file';
import resume from './modules/resume';

export const store = configureStore({
  reducer: {
    editor,
    explorer,
    file,
    resume,
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;

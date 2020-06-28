import { createActions, handleActions } from 'redux-actions';

const CHANGE_FILE = 'CHANGE_FILE';
const OPEN_FILE = 'OPEN_FILE';
const CLOSE_FILE = 'CLOSE_FILE';
const OPEN_CHANGE_FILE = 'OPEN_CHANGE_FILE';
const prefix = 'file';

export const {
  changeFile,
  openFile,
  closeFile,
  openChangeFile,
} = createActions(
  CHANGE_FILE,
  OPEN_FILE,
  CLOSE_FILE,
  OPEN_CHANGE_FILE,
  {
    prefix,
  },
);

const initialState = {
  currentTab: 'greet.js',
  openFiles: [
    'greet.js',
    'contact.css',
  ],
};

const onFileChange = (state, { payload }) => ({
  ...state,
  currentTab: payload,
});

const onFileOpen = (state, { payload }) => {
  const isFileAlreadyOpen = state.openFiles.indexOf(payload) > -1;

  if (isFileAlreadyOpen) {
    return state;
  }

  return ({
    ...state,
    openFiles: [
      ...state.openFiles,
      payload,
    ],
  });
};

const onFileClose = (state, { payload }) => ({
  ...state,
  openFiles: state.openFiles.filter((file) => file !== payload),
});

const onFileChangeOpen = (state, { payload }) => {
  const isFileAlreadyOpen = state.openFiles.indexOf(payload) > -1;

  if (isFileAlreadyOpen) {
    return {
      ...state,
      currentTab: payload,
    };
  }

  return ({
    ...state,
    currentTab: payload,
    openFiles: [
      ...state.openFiles,
      payload,
    ],
  });
};

const reducer = handleActions(
  new Map([
    [changeFile, onFileChange],
    [openFile, onFileOpen],
    [closeFile, onFileClose],
    [openChangeFile, onFileChangeOpen],
  ]),
  initialState,
);

export const getCurrentFile = (state) => state.file.currentTab;
export const getOpenFiles = (state) => state.file.openFiles;

export default reducer;

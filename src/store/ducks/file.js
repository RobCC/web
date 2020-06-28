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

const reducer = handleActions(
  new Map([
    [changeFile, onFileChange],
  ]),
  initialState,
);

export const getCurrentFile = (state) => state.file.currentTab;
export const getOpenFiles = (state) => state.file.openFiles;

export default reducer;

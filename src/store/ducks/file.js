import { createAction, handleAction } from 'redux-actions';

const CHANGE_FILE = 'file/CHANGE_TAB';

const initialState = {
  currentTab: 'greet.js',
};

export const changeFile = createAction(CHANGE_FILE);

const onFileChange = (state, { payload }) => ({
  ...state,
  currentTab: payload,
});

const reducer = handleAction(changeFile, onFileChange, initialState);

export const getCurrentFile = (state) => state.file.currentTab;

export default reducer;

import { createAction, handleAction } from 'redux-actions';

const CHANGE_TAB = 'tabs/CHANGE_TAB';

const initialState = {
  currentTab: 'greet',
};

export const changeTab = createAction(CHANGE_TAB);

const onChangeTab = (state, { payload }) => ({
  ...state,
  currentTab: payload,
});

const reducer = handleAction(changeTab, onChangeTab, initialState);

export const getCurrentTab = (state) => state.tabs.currentTab;

export default reducer;

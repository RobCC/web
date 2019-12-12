const CHANGE_TAB = 'tabs/CHANGE_TAB';

const initialState = {
  currentTab: 'greet',
};

export default (state = initialState, { type, tabName }) => {
  switch (type) {
    case CHANGE_TAB:
      return {
        ...state,
        currentTab: tabName,
      };
    default:
      return state;
  }
};

export const changeTab = (tabName) => ({
  type: CHANGE_TAB,
  tabName,
});

const getRoot = (state) => state.tabs;

export const getCurrentTab = (state) => getRoot(state).currentTab;

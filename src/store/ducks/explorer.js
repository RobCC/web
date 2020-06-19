import { createAction, handleAction } from 'redux-actions';

const TOGGLE_EXPLORER = 'explorer/TOGGLE_EXPLORER';

const initialState = {
  isExplorerOpen: false,
};

export const toggleExplorer = createAction(TOGGLE_EXPLORER);

const onToggleExplorer = (state) => ({
  ...state,
  isExplorerOpen: !state.isExplorerOpen,
});

const reducer = handleAction(toggleExplorer, onToggleExplorer, initialState);

export const isExplorerOpen = (state) => state.explorer.isExplorerOpen;

export default reducer;

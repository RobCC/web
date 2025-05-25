import { createStore } from './store';

// TODO: rename to sideBar
export type State = {
  isSideBarOpen: boolean;
};

export const useExplorerStore = createStore({
  isSideBarOpen: false,
});

export function toggleSideBar() {
  useExplorerStore.setState(state => {
    state.isSideBarOpen = !state.isSideBarOpen;
  });
}

export const getIsSideBarOpen = ({ isSideBarOpen }: State) => isSideBarOpen;

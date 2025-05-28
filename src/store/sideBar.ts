import { createStore } from './store';

type State = {
  isOpen: boolean;
};

export const useExplorerStore = createStore<State>({
  isOpen: false,
});

export function toggle() {
  useExplorerStore.setState(state => {
    state.isOpen = !state.isOpen;
  });
}

export const isOpen = ({ isOpen: isSideBarOpen }: State) => isSideBarOpen;

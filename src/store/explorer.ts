import useStore, { RootState } from './store';

export const getIsSideViewOpen = ({ explorer }: RootState) =>
  explorer.isExplorerOpen;

export function toggleExplorer() {
  useStore.setState(state => {
    state.explorer.isExplorerOpen = !state.explorer.isExplorerOpen;
  },
  );
}

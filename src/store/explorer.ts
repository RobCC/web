import produce from 'immer';
import useStore, { RootState } from './store';

export const getIsExplorerOpen = ({ explorer }: RootState) => explorer.isExplorerOpen;

export function toggleExplorer() {
  useStore.setState(produce<RootState>(state => {
    state.explorer.isExplorerOpen = !state.explorer.isExplorerOpen;
  }));
}

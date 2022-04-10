import produce from 'immer';
import useStore, { RootState } from './store';

export const getIsResumeOpen = ({ resume }: RootState) => resume.isResumeOpen;

export function toggleResume() {
  useStore.setState(produce<RootState>(state => {
    state.resume.isResumeOpen = !state.resume.isResumeOpen;
  }));
}

import useStore, { RootState } from './store';

export const getIsResumeOpen = ({ resume }: RootState) => resume.isResumeOpen;

export function toggleResume() {
  useStore.setState(state => {
    state.resume.isResumeOpen = !state.resume.isResumeOpen;
  });
}

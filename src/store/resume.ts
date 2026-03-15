import { createStore } from './store';

// TODO: delete?

export type State = {
  isResumeOpen: boolean;
};

export const useResumeStore = createStore({
  isResumeOpen: false,
});

export function toggleResume() {
  useResumeStore.setState(state => ({ isResumeOpen: !state.isResumeOpen }));
}

export const getIsResumeOpen = ({ isResumeOpen }: State) => isResumeOpen;

import { createStore } from './store';

export type State = {
  isResumeOpen: boolean;
};

export const useResumeStore = createStore({
  isResumeOpen: false,
});

export function toggleResume() {
  useResumeStore.setState(state => {
    state.isResumeOpen = !state.isResumeOpen;
  });
}

export const getIsResumeOpen = ({ isResumeOpen }: State) => isResumeOpen;

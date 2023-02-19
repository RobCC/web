import { createStore } from './store';

export type State = {
  hasAnimationFinished: boolean;
};

export const useEditorStore = createStore({
  hasAnimationFinished: false,
});

export function setAnimationFinished() {
  useEditorStore.setState(state => {
    state.hasAnimationFinished = true;
  });
}

export const getHasAnimationFinished = ({ hasAnimationFinished }: State) =>
  hasAnimationFinished;

import { createStore } from './store';

type State = {
  hasAnimationFinished: boolean;
};

export const useEditorStore = createStore<State>({
  hasAnimationFinished: false,
});

export function setAnimationFinished() {
  useEditorStore.setState(state => {
    state.hasAnimationFinished = true;
  });
}

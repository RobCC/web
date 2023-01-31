import useStore, { RootState } from './store';

export const getHasAnimationFinished = ({ editor }: RootState) => editor.hasAnimationFinished;

export function setAnimationFinished() {
  useStore.setState(state => {
    state.editor.hasAnimationFinished = true;
  });
}

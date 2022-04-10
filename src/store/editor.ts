import produce from 'immer';
import useStore, { RootState } from './store';

export const getHasAnimationFinished = ({ editor }: RootState) => editor.hasAnimationFinished;

export function setAnimationFinished() {
  useStore.setState(produce<RootState>(state => {
    state.editor.hasAnimationFinished = true;
  }));
}

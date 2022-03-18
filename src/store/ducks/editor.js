import { createAction, handleAction } from 'redux-actions';

const ANIMATION_FINISHED = 'editor/ANIMATION_FINISHED';

const initialState = {
  hasAnimationFinished: false,
};

export const animationFinished = createAction(ANIMATION_FINISHED);

const onAnimationFinished = (state) => ({
  ...state,
  hasAnimationFinished: true,
});

const reducer = handleAction(
  animationFinished,
  onAnimationFinished,
  initialState,
);

export const hasAnimationFinished = (state) =>
  state.editor.hasAnimationFinished;

export default reducer;

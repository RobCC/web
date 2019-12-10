const ANIMATION_FINISHED = 'editor/ANIMATION_FINISHED';

const initialState = {
  hasAnimationFinished: false,
};

export default (state = initialState, { type }) => {
  switch (type) {
    case ANIMATION_FINISHED:
      return {
        ...state,
        hasAnimationFinished: true,
      };
    default:
      return state;
  }
};

export const setAnimationFinished = () => ({
  type: ANIMATION_FINISHED,
});

const getRoot = (state) => state.editor;

export const hasAnimationFinished = (state) => getRoot(state).hasAnimationFinished;

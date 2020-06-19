import { createAction, handleAction } from 'redux-actions';

const TOGGLE_RESUME = 'resume/TOGGLE_RESUME';

const initialState = {
  isResumeOpen: false,
};

export const toggleResume = createAction(TOGGLE_RESUME);

const onToggleResume = (state) => ({
  ...state,
  isResumeOpen: !state.isResumeOpen,
});

const reducer = handleAction(toggleResume, onToggleResume, initialState);

export const isResumeOpen = (state) => state.resume.isResumeOpen;

export default reducer;

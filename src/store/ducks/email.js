import { createAction, handleAction } from 'redux-actions';

const TOGGLE_EMAIL = 'email/TOGGLE_EMAIL';

const initialState = {
  isEmailOpen: false,
};

export const toggleEmail = createAction(TOGGLE_EMAIL);

const onToggleEmail = (state) => ({
  ...state,
  isEmailOpen: !state.isEmailOpen,
});

const reducer = handleAction(toggleEmail, onToggleEmail, initialState);

export const isEmailOpen = (state) => state.email.isEmailOpen;

export default reducer;

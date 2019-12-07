export const SHOW_EMAIL = 'email/SHOW_EMAIL';
export const HIDE_EMAIL = 'email/HIDE_EMAIL';
export const TOGGLE_EMAIL = 'email/TOGGLE_EMAIL';

const initialState = {
  isEmailOpen: false,
};

export default (state = initialState, { type }) => {
  switch (type) {
    case SHOW_EMAIL:
      return {
        ...state,
        isEmailOpen: true,
      };
    case HIDE_EMAIL:
      return {
        ...state,
        isEmailOpen: false,
      };
    case TOGGLE_EMAIL:
      return {
        ...state,
        isEmailOpen: !state.isEmailOpen,
      };
    default:
      return state;
  }
};

export const showEmail = ({
  type: SHOW_EMAIL,
});

export const hideEmail = ({
  type: HIDE_EMAIL,
});

export const toggleEmail = ({
  type: TOGGLE_EMAIL,
});

const getRoot = (state) => state.email;

export const isEmailOpen = (state) => getRoot(state).isEmailOpen;

// Actions
export const INC = 'INC';
export const ADD = 'ADD';

const initialState = {
  counter: 0,
};

// Reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case INC:
      return {
        ...state,
        counter: state.counter + 1,
      };
    case ADD:
      return {
        ...state,
        counter: state.counter + action.value,
      };
    default:
      return state;
  }
};

// Action Creators
export const increaseCounter = () => ({
  type: INC,
});

export const addCounter = (n) => ({
  type: ADD,
  value: n,
});

// Selectors

const getRoot = (state) => state.counter;

export const getCounter = (state) => getRoot(state).counter;

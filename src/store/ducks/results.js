// Actions
export const SAVE_RESULT = 'SAVE_RESULT';
export const DELETE_RESULT = 'DELETE_RESULT';

const initialState = {
  results: [],
};

// Reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case SAVE_RESULT:
      return {
        ...state,
        results: state.results.concat({ id: new Date(), value: action.result }),
      };
    case DELETE_RESULT:
      return {
        ...state,
        results: state.results.filter((res) => res.id !== action.toRemove),
      };
    default:
      return state;
  }
};

// Action Creators
export const saveResult = (result) => ({
  result,
  type: SAVE_RESULT,
});

export const deleteResult = (toRemove) => ({
  toRemove,
  type: DELETE_RESULT,
});

/*  eslint-disable no-console */
export const thunkDeleteResult = (toRemove) => (dispatch, getState) => setTimeout(
  () => {
    const { counter } = getState().counter;

    console.log('Old counter', counter);

    return dispatch(deleteResult(toRemove));
  },
  500,
);

/**
 * import { put } from 'redux-saga/effects';
 * export const deleteResultSaga = function* (toRemove) {
 *  yield console.log('Here your side effects');
 *  yield put({ toRemove, type: DELETE_RESULT });
 * }
 *
 * ...
 * sagaMiddleware = createSagaMiddleware();
 * sagaMiddleware.run(...)
 */

// Selectors
const getRoot = (state) => state.results;

export const getResults = (state) => getRoot(state).results;

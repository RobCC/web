import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

/*  eslint-disable no-unused-vars */
/*  eslint-disable no-console */
const logger = (store) => (next) => (action) => {
  const result = next(action);

  console.log('Middleware', action);
  // console.log('Store', store.getState());

  return result;
};

export default applyMiddleware(logger, thunk);

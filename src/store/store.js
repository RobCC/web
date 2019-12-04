import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import combinedReducers from './ducks/reducer';
import middlewares from './middlewares';

export default createStore(
  combinedReducers,
  composeWithDevTools(middlewares),
);

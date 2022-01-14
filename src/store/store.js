import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import combinedReducers from './ducks/reducer';

export default createStore(combinedReducers, composeWithDevTools());

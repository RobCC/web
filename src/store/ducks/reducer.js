import { combineReducers } from 'redux';
import counter from './counter';
import results from './results';

export default combineReducers({
  counter,
  results,
});

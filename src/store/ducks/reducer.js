import { combineReducers } from 'redux';
import counter from './counter';
import results from './results';
import email from './email';

export default combineReducers({
  counter,
  results,
  email,
});

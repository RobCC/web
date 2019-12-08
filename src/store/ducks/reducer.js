import { combineReducers } from 'redux';
import email from './email';

window.email = email;

export default combineReducers({
  email,
});

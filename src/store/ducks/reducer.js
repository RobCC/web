import { combineReducers } from 'redux';

import email from './email';
import editor from './editor';

export default combineReducers({
  email,
  editor,
});

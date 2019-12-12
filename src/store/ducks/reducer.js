import { combineReducers } from 'redux';

import email from './email';
import editor from './editor';
import tabs from './tabs';

export default combineReducers({
  email,
  editor,
  tabs,
});

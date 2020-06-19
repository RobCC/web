import { combineReducers } from 'redux';

import email from './email';
import editor from './editor';
import tabs from './tabs';
import resume from './resume';
import explorer from './explorer';

export default combineReducers({
  email,
  editor,
  tabs,
  resume,
  explorer,
});

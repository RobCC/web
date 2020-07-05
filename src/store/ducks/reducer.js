import { combineReducers } from 'redux';

import email from './email';
import editor from './editor';
import file from './file';
import resume from './resume';
import explorer from './explorer';

export default combineReducers({
  email,
  editor,
  file,
  resume,
  explorer,
});

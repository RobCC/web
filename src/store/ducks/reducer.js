import { combineReducers } from 'redux';

import editor from './editor';
import file from './file';
import resume from './resume';
import explorer from './explorer';

export default combineReducers({
  editor,
  file,
  resume,
  explorer,
});

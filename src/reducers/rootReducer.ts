import { combineReducers } from 'redux';

import NameSpace from './nameSpace';
import { reducer as timer } from './timer';

export default combineReducers({
  [NameSpace.TIMER]: timer,
})
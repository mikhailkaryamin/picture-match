import { combineReducers } from 'redux';

import NameSpace from './nameSpace';
import { reducer as cards } from './cards';
import { reducer as timer } from './timer';

export default combineReducers({
  [NameSpace.CARDS]: cards,
  [NameSpace.TIMER]: timer,
})
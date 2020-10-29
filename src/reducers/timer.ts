import { ActionType } from '../actions/timer';

import {
  ActionSetActiveTimer,
  ActionSetTimer,
  ActionResetTimer,
  Timer as TimerType
} from '../shared/types';

type ActionType = ActionSetActiveTimer | ActionSetTimer | ActionResetTimer;

const initialState = {
  isActive: false,
  time: 0,
};

const reducer = (state: TimerType = initialState, action: ActionType): TimerType => {
  switch (action.type) {
    case ActionType.SET_ACTIVE_TIMER:
      return {
        ...state,
        isActive: action.isActive,
      };

    case ActionType.SET_TIMER:
      return {
        ...state,
        time: action.time,
      };

    case ActionType.RESET_TIMER:
      return {
        isActive: false,
        time: 0,
      };

    default:
      return state;
  }
};

export {
  reducer,
};

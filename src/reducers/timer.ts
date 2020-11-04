import { ActionType } from '../actions/timer';

import {
  ActionsTimer,
  Timer as TimerType
} from '../shared/types';

const initialState = {
  bestTime: 0,
  isActive: false,
  time: 0,
};

const reducer = (state: TimerType = initialState, action: ActionsTimer): TimerType => {
  switch (action.type) {
    case ActionType.SET_ACTIVE_TIMER:
      return {
        ...state,
        isActive: action.isActive,
      };

    case ActionType.SET_BEST_TIME:
      return {
        ...state,
        bestTime: (action.time < state.bestTime || !state.bestTime) ? action.time : state.bestTime,
      };

    case ActionType.SET_TIMER:
      return {
        ...state,
        time: action.time,
      };

    case ActionType.RESET_TIMER:
      return {
        ...state,
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

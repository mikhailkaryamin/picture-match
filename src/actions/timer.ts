import {
  Action as ActionWithoutPayload,
  ActionsTimer
} from '../shared/types';

const ActionType = {
  SET_ACTIVE_TIMER: 'SET_ACTIVE_TIMER',
  SET_BEST_TIME: 'SET_BEST_TIME',
  SET_TIMER: 'SET_TIMER',
  RESET_TIMER: 'RESET_TIMER',
} as const;

const ActionCreator = {
  setActive: (isActive: boolean): ActionsTimer => ({
    type: ActionType.SET_ACTIVE_TIMER,
    isActive,
  }),

  setTime: (time: number): ActionsTimer => ({
    type: ActionType.SET_TIMER,
    time,
  }),

  setBestTime: (time: number): ActionsTimer => ({
    type: ActionType.SET_BEST_TIME,
    time,
  }),

  resetTimer: (): ActionWithoutPayload => ({
    type: ActionType.RESET_TIMER,
  }),
};

export {
  ActionCreator,
  ActionType
};

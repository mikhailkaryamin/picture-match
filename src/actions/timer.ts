import {
  Action as ActionWithoutPayload,
  ActionSetActiveTimer,
  ActionSetTimer,
} from '../shared/types';

const ActionType = {
  SET_ACTIVE_TIMER: 'SET_ACTIVE_TIMER',
  SET_TIMER: 'SET_TIMER',
  RESET_TIMER: 'RESET_TIMER',
} as const;

const ActionCreator = {
  setActive: (isActive: boolean): ActionSetActiveTimer => ({
    type: ActionType.SET_ACTIVE_TIMER,
    isActive,
  }),

  setTime: (time: number): ActionSetTimer => ({
    type: ActionType.SET_TIMER,
    time,
  }),

  resetTimer: (): ActionWithoutPayload => ({
    type: ActionType.RESET_TIMER,
  }),
};

export {
  ActionCreator,
  ActionType,
};

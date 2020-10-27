const ActionType = {
  SET_ACTIVE_TIMER: 'SET_ACTIVE_TIMER',
  SET_TIMER: 'SET_TIMER',
  RESET_TIMER: 'RESET_TIMER',
}

const ActionCreator = {
  setActive: (isActive: boolean) => ({
    type: ActionType.SET_ACTIVE_TIMER,
    payload: isActive,
  }),

  setTime: (time: number) => ({
    type: ActionType.SET_TIMER,
    payload: time,
  }),

  resetTimer: () => ({
    type: ActionType.RESET_TIMER,
  }),
}

export {
  ActionCreator,
  ActionType,
}
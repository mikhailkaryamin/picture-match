const ActionType = {
  START_TIMER: 'START_TIMER',
  STOP_TIMER: 'STOP_TIMER',
  RESET_TIMER: 'RESET_TIMER',
}

const ActionCreator = {
  startTimer: () => ({
    type: ActionType.START_TIMER,
  }),

  stopTimer: () => ({
    type: ActionType.STOP_TIMER,
  }),

  resetTimer: () => ({
    type: ActionType.RESET_TIMER,
  })
}

export {
  ActionCreator,
  ActionType,
}
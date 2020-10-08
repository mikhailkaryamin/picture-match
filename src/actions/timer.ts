const ActionType = {
  START_TIMER: 'START_TIMER',
  STOP_TIMER: 'STOP_TIMER',
  RESET_TIMER: 'RESET_TIMER',
  TICK: 'TICK',
}

const ActionCreator = {
  startTimer: (time: number) => ({
    type: ActionType.START_TIMER,
    offset: time,
  }),

  stopTimer: () => ({
    type: ActionType.STOP_TIMER,
  }),

  resetTimer: () => ({
    type: ActionType.RESET_TIMER,
  }),

  tick: (time: number) => ({
    type: ActionType.TICK,
    time: time,
  })
}

export {
  ActionCreator,
  ActionType,
}
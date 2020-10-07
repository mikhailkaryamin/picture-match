import { ActionType } from '../actions/timer';

type Action = {
  type: string;
};

const initialState = {
  isOn: false,
  time: 0,
};

const reducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.START_TIMER:
      return {
        ...initialState,
        isOn: true,
        offset: Date.now(),
      };

    case ActionType.STOP_TIMER:
      return {
        isOn: false,
        time: state.time,
      }
    
    case ActionType.RESET_TIMER:
      return {
        isOn: false,
        time: 0,
        offset: null,
      };

    default:
      return state;
  }
}

export {
  reducer,
}
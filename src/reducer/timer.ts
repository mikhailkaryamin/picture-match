import { ActionType } from '../actions/timer';

type Action = {
  type: string;
  offset: number;
  time: number;
};

type State = {
  isOn: boolean | null;
  time: number;
  offset: number;
}

const initialState = {
  isOn: null,
  time: 0,
  offset: 0,
};

const reducer = (state: State = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.START_TIMER:
      return {
        ...initialState,
        isOn: true,
        offset: action.offset,
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
        offset: 0,
      };

    case ActionType.TICK:
      return {
        ...state,
        time: state.time + (action.time - state.offset),
        offset: action.time,
      };

    default:
      return state;
  }
}

export {
  reducer,
}
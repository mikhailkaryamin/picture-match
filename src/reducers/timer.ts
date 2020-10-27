import { ActionType } from '../actions/timer';

type Action = {
  type: string;
  payload: number | boolean | undefined;
};

type State = {
  isActive: boolean | null;
  time: number;
}

const initialState = {
  isActive: false,
  time: 0,
};

const reducer = (state: State = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.SET_ACTIVE_TIMER:
      return {
        ...state,
        isActive: action.payload,
      }

    case ActionType.SET_TIMER:
      return {
        ...state,
        time: action.payload,
      };

    case ActionType.RESET_TIMER:
      return {
        isActive: false,
        time: 0,
      };

    default:
      return state;
  }
}

export {
  reducer,
}
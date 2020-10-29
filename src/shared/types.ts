import { ActionType as ActionTypeCards } from '../actions/cards';
import { ActionType as ActionTypeTimer } from '../actions/timer';

export interface Action {
  type: string,
}

export interface Card {
  isFlip: boolean,
  isVisible: boolean,
  srcImg: string,
  title: string,
}

export interface CardsReducer {
  cards: Card[];
  firstOpenCard: Card | null;
  numberOfCards: number;
  secondOpenCard: Card| null;
  sizeFrame: number[];
}

export interface Timer {
  isActive: boolean;
  time: number;
}

export interface State {
  CARDS: CardsReducer;
  TIMER: Timer;
}

export interface ActionFrameSize {
  type: typeof ActionTypeCards.SET_FRAME_SIZE,
  sizeFrame: number[]
}

export interface ActionSetNumberOfCard {
  type: typeof ActionTypeCards.SET_NUMBER_OF_CARD,
  numberOfCards: number,
}

export interface ActionFirstOpenCard {
  type: typeof ActionTypeCards.SET_FIRST_OPEN_CARD,
  firstOpenCard: Card
}

export interface ActionSecondOpenCard {
  type: typeof ActionTypeCards.SET_SECOND_OPEN_CARD,
  secondOpenCard: Card
}

export interface ActionSetActiveTimer {
  type: typeof ActionTypeTimer.SET_ACTIVE_TIMER,
  isActive: boolean
}

export interface ActionSetTimer {
  type: typeof ActionTypeTimer.SET_TIMER,
  time: number
}

export interface ActionResetTimer {
  type: typeof ActionTypeTimer.RESET_TIMER,
}

import { ActionType as ActionTypeCards } from '../actions/cards';
import { ActionType as ActionTypeTimer } from '../actions/timer';

export interface Action {
  type: string,
}

export interface Card {
  id: number,
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
  bestTime: number;
  isActive: boolean;
  time: number;
}

export interface State {
  CARDS: CardsReducer;
  TIMER: Timer;
}

interface ActionCheckCards {
  type: typeof ActionTypeCards.CHECK_MATCH_CARDS,
}

interface ActionFrameSize {
  type: typeof ActionTypeCards.SET_FRAME_SIZE,
  sizeFrame: number[]
}

interface ActionFlipCard {
  type: typeof ActionTypeCards.SET_FLIP_CARD,
  id: number,
}

interface ActionFirstOpenCard {
  type: typeof ActionTypeCards.SET_FIRST_OPEN_CARD,
  firstOpenCard: Card
}

interface ActionSecondOpenCard {
  type: typeof ActionTypeCards.SET_SECOND_OPEN_CARD,
  secondOpenCard: Card
}

interface ActionSetNumberOfCard {
  type: typeof ActionTypeCards.SET_NUMBER_OF_CARD,
  numberOfCards: number,
}

interface ActionResetCards {
  type: typeof ActionTypeCards.RESET_CARDS,
}

interface ActionResetOpenCards {
  type: typeof ActionTypeCards.RESET_OPEN_CARDS,
}

interface ActionSetActiveTimer {
  type: typeof ActionTypeTimer.SET_ACTIVE_TIMER,
  isActive: boolean
}

interface ActionBestTime {
  type: typeof ActionTypeTimer.SET_BEST_TIME,
  time: number
}

interface ActionSetTimer {
  type: typeof ActionTypeTimer.SET_TIMER,
  time: number
}

interface ActionResetTimer {
  type: typeof ActionTypeTimer.RESET_TIMER,
}

export type ActionsCards =
  | ActionCheckCards
  | ActionFrameSize
  | ActionSetNumberOfCard
  | ActionFirstOpenCard
  | ActionSecondOpenCard
  | ActionFlipCard
  | ActionResetCards
  | ActionResetOpenCards;

export type ActionsTimer =
  | ActionSetActiveTimer
  | ActionBestTime
  | ActionSetTimer
  | ActionResetTimer;

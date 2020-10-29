import {
  ActionFirstOpenCard,
  ActionFrameSize,
  ActionSetNumberOfCard,
  ActionSecondOpenCard,
  Card as CardType,
} from '../shared/types';

const ActionType = {
  SET_FIRST_OPEN_CARD: 'SET_FIRST_OPEN_CARD',
  SET_FRAME_SIZE: 'SET_FRAME_SIZE',
  SET_NUMBER_OF_CARD: 'SET_NUMBER_OF_CARD',
  SET_SECOND_OPEN_CARD: 'SET_SECOND_OPEN_CARD',
} as const;

const ActionCreator = {
  setFirstOpenCard: (card: CardType): ActionFirstOpenCard => ({
    type: ActionType.SET_FIRST_OPEN_CARD,
    firstOpenCard: card,
  }),

  setFrameSize: (size: number[]): ActionFrameSize => ({
    type: ActionType.SET_FRAME_SIZE,
    sizeFrame: size,
  }),

  setNumberOfCards: (number: number): ActionSetNumberOfCard => ({
    type: ActionType.SET_NUMBER_OF_CARD,
    numberOfCards: number,
  }),

  setSecondOpenCard: (card: CardType): ActionSecondOpenCard => ({
    type: ActionType.SET_SECOND_OPEN_CARD,
    secondOpenCard: card,
  }),
};

export {
  ActionCreator,
  ActionType,
};

import {
  ActionsCards,
  Card as CardType,
} from '../shared/types';

const ActionType = {
  CHECK_MATCH_CARDS: 'CHECK_MATCH_CARDS',
  SET_FIRST_OPEN_CARD: 'SET_FIRST_OPEN_CARD',
  SET_FLIP_CARD: 'SET_FLIP_CARD',
  SET_FRAME_SIZE: 'SET_FRAME_SIZE',
  SET_NUMBER_OF_CARD: 'SET_NUMBER_OF_CARD',
  SET_SECOND_OPEN_CARD: 'SET_SECOND_OPEN_CARD',
  RESET_CARDS: 'RESET_CARDS',
  RESET_OPEN_CARDS: 'RESET_OPEN_CARDS',
} as const;

const ActionCreator = {
  checkMatchCards: (): ActionsCards => ({
    type: ActionType.CHECK_MATCH_CARDS,
  }),

  setFirstOpenCard: (card: CardType): ActionsCards => ({
    type: ActionType.SET_FIRST_OPEN_CARD,
    firstOpenCard: card,
  }),

  setFlipCard: (id: number): ActionsCards => ({
    type: ActionType.SET_FLIP_CARD,
    id,
  }),

  setFrameSize: (size: number[]): ActionsCards => ({
    type: ActionType.SET_FRAME_SIZE,
    sizeFrame: size,
  }),

  setNumberOfCards: (number: number): ActionsCards => ({
    type: ActionType.SET_NUMBER_OF_CARD,
    numberOfCards: number,
  }),

  setSecondOpenCard: (card: CardType): ActionsCards => ({
    type: ActionType.SET_SECOND_OPEN_CARD,
    secondOpenCard: card,
  }),

  resetCards: (): ActionsCards => ({
    type: ActionType.RESET_CARDS,
  }),

  resetOpenCards: (): ActionsCards => ({
    type: ActionType.RESET_OPEN_CARDS,
  }),
};

export {
  ActionCreator,
  ActionType,
};

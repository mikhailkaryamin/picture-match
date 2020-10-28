import { Card as CardType } from '../shared/types';

const ActionType = {
  SET_FIRST_OPEN_CARD: 'SET_FIRST_OPEN_CARD',
  SET_INVISIBLE_CARD: 'SET_INVISIBLE_CARD',
  SET_FRAME_SIZE: 'SET_FRAME_SIZE',
  SET_NUMBER_OF_CARD: 'SET_NUMBER_OF_CARD',
  SET_SECOND_OPEN_CARD: 'SET_SECOND_OPEN_CARD',
}

const ActionCreator = {
  setFirstOpenCard: (card: CardType) => ({
    type: ActionType.SET_FIRST_OPEN_CARD,
    payload: card,
  }),

  setFrameSize: (size: number[]) => ({
    type: ActionType.SET_FRAME_SIZE,
    payload: size,
  }),

  setInvisibleCard: (card: CardType) => ({
    type: ActionType.SET_INVISIBLE_CARD,
    payload: card,
  }),

  setNumberOfCards: (number: number) => ({
    type: ActionType.SET_NUMBER_OF_CARD,
    payload: number,
  }),

  setSecondOpenCard: (card: CardType) => ({
    type: ActionType.SET_SECOND_OPEN_CARD,
    payload: card,
  }),

}

export {
  ActionCreator,
  ActionType,
}
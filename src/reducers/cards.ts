import { ActionType } from '../actions/cards';

import {
  ActionsCards,
  Card as CardType,
  CardsReducer as CardsReducerType
} from '../shared/types';
import { shuffle } from '../shared/utils';

import Animals from '../assets/animals/index';

const MOCK_CARDS = [
  {
    ...Animals.BEAR,
    isFlip: false,
    isVisible: true,
  },
  {
    ...Animals.BEE,
    isFlip: false,
    isVisible: true,
  },
  {
    ...Animals.CHICKEN,
    isFlip: false,
    isVisible: true,
  },
  {
    ...Animals.DOG,
    isFlip: false,
    isVisible: true,
  },
  {
    ...Animals.ELEPHANT,
    isFlip: false,
    isVisible: true,
  },
  {
    ...Animals.FLAMINGO,
    isFlip: false,
    isVisible: true,
  },
  {
    ...Animals.FROG,
    isFlip: false,
    isVisible: true,
  },
  {
    ...Animals.GIRAFFE,
    isFlip: false,
    isVisible: true,
  },
  {
    ...Animals.HORSE,
    isFlip: false,
    isVisible: true,
  },
  {
    ...Animals.KOALA,
    isFlip: false,
    isVisible: true,
  },
  {
    ...Animals.LION,
    isFlip: false,
    isVisible: true,
  },
  {
    ...Animals.OWL,
    isFlip: false,
    isVisible: true,
  },
  {
    ...Animals.PIG,
    isFlip: false,
    isVisible: true,
  },
  {
    ...Animals.SPIDER,
    isFlip: false,
    isVisible: true,
  },
  {
    ...Animals.TURTLE,
    isFlip: false,
    isVisible: true,
  },
];

const DEFAULT_SIZE = 12;

const checkMatchCards = (cards: CardType[], isMatch: boolean, firstId: number, secondId: number) => {
  const copyCards = cards.slice();

  if (isMatch) {
    copyCards[firstId].isVisible = false;
    copyCards[secondId].isVisible = false;
  } else {
    copyCards[firstId].isFlip = false;
    copyCards[secondId].isFlip = false;
  }

  return copyCards;
};

const getCards = (length: number) => {
  const shuffleCards = shuffle(MOCK_CARDS);
  const shuffleCardsCut = shuffleCards.slice(0, length / 2);
  const cards = shuffle(shuffleCardsCut.concat(shuffleCardsCut));

  const cardsWithId = cards.map((card, i) => {
    return ({
      ...card,
      id: i,
    });
  });

  return cardsWithId;
};

const setFlipCardInArr = (cards: CardType[], indexCard: number) => {
  const copyCards = cards.slice();
  copyCards[indexCard].isFlip = true;

  return copyCards;
};

const initialState = {
  cards: getCards(DEFAULT_SIZE),
  firstOpenCard: null,
  numberOfCards: DEFAULT_SIZE,
  secondOpenCard: null,
  sizeFrame: [3, 4],
};

const reducer = (state: CardsReducerType = initialState, action: ActionsCards): CardsReducerType => {
  switch (action.type) {
    case ActionType.CHECK_MATCH_CARDS:

      if (state.firstOpenCard !== null && state.secondOpenCard !== null) {
        const isMatch = state.firstOpenCard.title === state.secondOpenCard.title;

        return {
          ...state,
          cards: checkMatchCards(state.cards, isMatch, state.firstOpenCard.id, state.secondOpenCard.id),
        };
      } else {
        return state;
      }


    case ActionType.SET_FIRST_OPEN_CARD:
      return {
        ...state,
        firstOpenCard: action.firstOpenCard,
      };

    case ActionType.SET_FLIP_CARD:
      return {
        ...state,
        cards: setFlipCardInArr(state.cards, action.id),
      };

    case ActionType.SET_NUMBER_OF_CARD:
      return {
        ...state,

        cards: getCards(action.numberOfCards),
        numberOfCards: action.numberOfCards,
      };

    case ActionType.SET_SECOND_OPEN_CARD:
      return {
        ...state,
        cards: setFlipCardInArr(state.cards, action.secondOpenCard.id),
        secondOpenCard: action.secondOpenCard,
      };

    case ActionType.SET_FRAME_SIZE:
      return {
        ...state,
        sizeFrame: action.sizeFrame,
      };

    case ActionType.RESET_CARDS:
      return {
        ...state,
        cards: getCards(state.sizeFrame[0] * state.sizeFrame[1]),
      };

    case ActionType.RESET_OPEN_CARDS:
      return {
        ...state,
        firstOpenCard: null,
        secondOpenCard: null,
      };

    default:
      return state;
  }
};

export {
  reducer
};

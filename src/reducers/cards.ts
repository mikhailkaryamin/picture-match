import { ActionType } from '../actions/cards';

import {
  ActionFrameSize,
  ActionSetNumberOfCard,
  ActionFirstOpenCard,
  ActionSecondOpenCard,
  CardsReducer as CardsReducerType,
} from '../shared/types';
import { shuffle } from '../shared/utils';

import Animals from '../assets/animals/index';

type Action = ActionFrameSize | ActionSetNumberOfCard | ActionFirstOpenCard | ActionSecondOpenCard;

const MOCK_CARDS = [
  {
    ...Animals.BEAR,
    isFlip: true,
    isVisible: true,
  },
  {
    ...Animals.BEE,
    isFlip: true,
    isVisible: true,
  },
  {
    ...Animals.CHICKEN,
    isFlip: true,
    isVisible: true,
  },
  {
    ...Animals.DOG,
    isFlip: true,
    isVisible: true,
  },
  {
    ...Animals.ELEPHANT,
    isFlip: true,
    isVisible: true,
  },
  {
    ...Animals.FLAMINGO,
    isFlip: true,
    isVisible: true,
  },
  {
    ...Animals.FROG,
    isFlip: true,
    isVisible: true,
  },
  {
    ...Animals.GIRAFFE,
    isFlip: true,
    isVisible: true,
  },
  {
    ...Animals.HORSE,
    isFlip: true,
    isVisible: true,
  },
  {
    ...Animals.KOALA,
    isFlip: true,
    isVisible: true,
  },
  {
    ...Animals.LION,
    isFlip: true,
    isVisible: true,
  },
  {
    ...Animals.OWL,
    isFlip: true,
    isVisible: true,
  },
  {
    ...Animals.PIG,
    isFlip: true,
    isVisible: true,
  },
  {
    ...Animals.SPIDER,
    isFlip: true,
    isVisible: true,
  },
  {
    ...Animals.TURTLE,
    isFlip: true,
    isVisible: true,
  },
];

const DEFAULT_SIZE = 12;

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

const initialState = {
  cards: getCards(DEFAULT_SIZE),
  firstOpenCard: null,
  numberOfCards: DEFAULT_SIZE,
  secondOpenCard: null,
  sizeFrame: [3, 4],
};

const reducer = (state: CardsReducerType = initialState, action: Action): CardsReducerType => {
  switch (action.type) {
    case ActionType.SET_FIRST_OPEN_CARD:
      return {
        ...state,
        firstOpenCard: action.firstOpenCard,
      };

    case ActionType.SET_NUMBER_OF_CARD:
      const cards = getCards(action.numberOfCards);

      return {
        ...state,

        cards,
        numberOfCards: action.numberOfCards,
      };

    case ActionType.SET_SECOND_OPEN_CARD:
      return {
        ...state,
        secondOpenCard: action.secondOpenCard,
      };

    case ActionType.SET_FRAME_SIZE:
      return {
        ...state,
        sizeFrame: action.sizeFrame,
      };

    default:
      return state;
  }
};

export {
  reducer,
};

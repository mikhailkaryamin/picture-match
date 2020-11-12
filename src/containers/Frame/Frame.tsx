import React from 'react';
import {
  useDispatch,
  shallowEqual,
  useSelector,
} from 'react-redux';

import CardFlip from '../CardFlip/CardFlip';
import EndGame from '../../components/End-Game/End-Game';

import { ActionCreator as ActionTimer } from '../../actions/timer';

import {
  State as StateType,
} from '../../shared/types';
import { formatTime } from '../../shared/utils';

const Frame: React.FC = () => {
  const dispatch = useDispatch();
  const bestTime = useSelector((state: StateType) => state['TIMER'].bestTime);
  const cards = useSelector((state: StateType) => state['CARDS'].cards, shallowEqual);
  const sizeFrame = useSelector((state: StateType) => state['CARDS'].sizeFrame, shallowEqual);
  const time = useSelector((state: StateType) => state['TIMER'].time);

  const isEndGame = cards.every((card) => !card.isVisible);

  if (isEndGame) {
    dispatch(ActionTimer.setBestTime(time));
    dispatch(ActionTimer.setActive(false));
  }

  return (
    <div className="frame">
      {isEndGame || (
        <ul className="frame__cards-list">
          {cards.map((card, i) => {
            return (
              <li
                className={`frame__card frame__card--${sizeFrame[0]}x${sizeFrame[1]}`}
                key={`${card}-${i}`}
              >
                <div className="frame__card-wrapper">
                  <CardFlip
                    key={`${card.title}-${i}`}
                    card={card}
                  />
                </div>
              </li>
            );
          })}
        </ul>
      )}
      {isEndGame && (
        <EndGame
          currentTime={formatTime(time)}
          bestTime={formatTime(bestTime)}
        />
      )}
    </div>
  );
};

export default Frame;

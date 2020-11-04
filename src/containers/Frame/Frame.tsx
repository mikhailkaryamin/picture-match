import React from 'react';
import { connect } from 'react-redux';

import CardFlip from '../CardFlip/CardFlip';
import EndGame from '../../components/End-Game/End-Game';

import { ActionCreator as ActionTimer } from '../../actions/timer';

import {
  ActionsTimer,
  Card as CardType,
  State as StateType,
} from '../../shared/types';
import { formatTime } from '../../shared/utils';

type Dispatch = (arg: ActionsTimer) => void;

type Props = {
  bestTime: number;
  cards: CardType[];
  setActiveTimer: (arg: boolean) => void;
  setBestTime: (arg: number) => void;
  sizeFrame: number[];
  time: number;
}

const Frame: React.FC<Props> = ({ bestTime, cards, setActiveTimer, setBestTime, sizeFrame, time }: Props) => {

  const isEndGame = cards.every((card) => !card.isVisible);

  if (isEndGame) {
    setBestTime(time);
    setActiveTimer(false);
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

const mapStateToProps = (state: StateType) => ({
  bestTime: state['TIMER'].bestTime,
  cards: state['CARDS'].cards,
  sizeFrame: state['CARDS'].sizeFrame,
  time: state['TIMER'].time,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setBestTime: (time: number) => {
    dispatch(ActionTimer.setBestTime(time));
  },
  setActiveTimer: (isActive: boolean) => {
    dispatch(ActionTimer.setActive(isActive));
  }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Frame);

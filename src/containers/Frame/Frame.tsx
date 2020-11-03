import React from 'react';
import { connect } from 'react-redux';

import CardFlip from '../CardFlip/CardFlip';
import EndGame from '../../components/End-Game/End-Game';

import {
  Card as CardType,
  State as StateType,
} from '../../shared/types';

type Props = {
  cards: CardType[];
  sizeFrame: number[];
}

const Frame: React.FC<Props> = ({ cards, sizeFrame }: Props) => {

  const isEndGame = cards.every((card) => !card.isVisible);

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
          currentTime={`00.10`}
          bestTime={`00.10`}
        />
      )}
    </div>
  );
};

const mapStateToProps = (state: StateType) => ({
  cards: state['CARDS'].cards,
  sizeFrame: state['CARDS'].sizeFrame,
});

export default connect(
    mapStateToProps
)(Frame);

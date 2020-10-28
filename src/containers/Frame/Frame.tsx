import React from 'react';
import { connect } from 'react-redux';

import CardFlip from '../CardFlip/CardFlip';

import {
  Card as CardType,
  State as StateType,
} from '../../shared/types';

type Props = {
  cards: CardType[];
  sizeFrame: number[];
}

const Frame: React.FC<Props> = ({ cards, sizeFrame }: Props) => {
  return (
    <div className="frame">
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

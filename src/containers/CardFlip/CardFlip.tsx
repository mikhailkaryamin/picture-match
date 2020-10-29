import React, { useState } from 'react';
import { connect } from 'react-redux';

import Card from '../../components/Card/Card';
import Animals from '../../assets/animals/index';

import { ActionCreator as ActionCards } from '../../actions/cards';

import {
  ActionFirstOpenCard,
  ActionSecondOpenCard,
  Card as CardType,
  State as StateType,
} from '../../shared/types';

type Dispatch = (arg: ActionFirstOpenCard | ActionSecondOpenCard) => void;

type Props = {
  firstOpenCard: CardType | null;
  card: CardType;
  isPlay: boolean;
  setFirstOpenCard: (card: CardType) => void;
  setSecondOpenCard: (card: CardType) => void;
}

const CardFlip: React.FC<Props> = ({ firstOpenCard, card, isPlay, setFirstOpenCard, setSecondOpenCard }: Props) => {

  const [isFlipped, setFlipped] = useState(true);

  const frontRotateY = `rotateY(${
    isFlipped ? 180 : 0
  }deg)`;
  const backRotateY = `rotateY(${
    isFlipped ? 0 : -180
  }deg)`;

  const displayType = card.isVisible ? `block` : `none`;

  return (
    <div className="card-flip"
      style={{ display: displayType }}
      onClick={isPlay ? () => setFlipped(!isFlipped) : Boolean}
    >
      <div
        className="card-flip__front"
        style={{
          position: isFlipped ? 'relative' : 'absolute',
          transform: frontRotateY,
        }}
      >
        <Card
          img={card.srcImg}
          title={card.title}
        />
      </div>
      <div
        className="card-flip__back"
        style={{
          position: isFlipped ? 'absolute' : 'relative',
          transform: backRotateY,
        }}
      >
        <Card
          img={Animals.BACK.srcImg}
          title={Animals.BACK.title}
        />
      </div>
    </div>
  );
};

const mapStateToProps = (state: StateType) => ({
  firstOpenCard: state['CARDS'].firstOpenCard,
  isPlay: state['TIMER'].isActive,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setFirstOpenCard: (card: CardType) => {
    dispatch(ActionCards.setFirstOpenCard(
        card
    ));
  },
  setSecondOpenCard: (card: CardType) => {
    dispatch(ActionCards.setSecondOpenCard(
        card
    ));
  },
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(CardFlip);

import React from 'react';
import { connect } from 'react-redux';

import Card from '../../components/Card/Card';
import Animals from '../../assets/animals/index';

import { ActionCreator as ActionCards } from '../../actions/cards';

import {
  ActionsCards,
  Card as CardType,
  State as StateType,
} from '../../shared/types';

type Dispatch = (arg: ActionsCards) => void;

type Props = {
  firstOpenCard: CardType | null;
  card: CardType;
  isPlay: boolean;
  secondOpenCard: CardType | null;
  setFirstOpenCard: (card: CardType) => void;
  setSecondOpenCard: (card: CardType) => void;
}

const CardFlip: React.FC<Props> = ({ firstOpenCard, card, isPlay, setFirstOpenCard, setSecondOpenCard, secondOpenCard }: Props) => {
  const onClickCard = () => {
    if (!isPlay || secondOpenCard) {
      return false;
    } else if (firstOpenCard) {
      setSecondOpenCard(openCard);
    } else {
      setFirstOpenCard(openCard);
    }

    return true;
  };

  const openCard: CardType = ({
    ...card,
    isFlip: true,
  });

  const frontRotateY = `rotateY(${
    card.isFlip ? 0 : -180
  }deg)`;
  const backRotateY = `rotateY(${
    card.isFlip ? 180 : 0
  }deg)`;

  const displayType = card.isVisible ? `block` : `none`;

  return (
    <div className="card-flip"
      style={{ display: displayType }}
      onClick={onClickCard}
    >
      <div
        className="card-flip__front"
        style={{
          position: card.isFlip ? 'relative' : 'absolute',
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
          position: card.isFlip ? 'absolute' : 'relative',
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
  cards: state[`CARDS`].cards,
  firstOpenCard: state['CARDS'].firstOpenCard,
  secondOpenCard: state[`CARDS`].secondOpenCard,
  isPlay: state['TIMER'].isActive,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setFirstOpenCard: (card: CardType) => {
    dispatch(ActionCards.setFirstOpenCard(
        card
    ));
    dispatch(ActionCards.setFlipCard(
        card.id
    ));
  },
  setSecondOpenCard: (card: CardType) => {
    const check = () => {
      dispatch(ActionCards.checkMatchCards());
      dispatch(ActionCards.resetOpenCards());
    };

    dispatch(ActionCards.setSecondOpenCard(
        card
    ));
    dispatch(ActionCards.setFlipCard(
        card.id
    ));
    setTimeout(check, 700);
  },
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(CardFlip);

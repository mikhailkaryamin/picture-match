import React from 'react';
import {
  useDispatch,
  shallowEqual,
  useSelector
} from 'react-redux';

import Card from '../../components/Card/Card';
import Animals from '../../assets/animals/index';

import { ActionCreator as ActionCards } from '../../actions/cards';

import {
  Card as CardType,
  State as StateType
} from '../../shared/types';

type Props = {
  card: CardType;
}

const CardFlip: React.FC<Props> = ({ card }: Props) => {
  const dispatch = useDispatch();

  const firstOpenCard = useSelector((state: StateType) => state['CARDS'].firstOpenCard, shallowEqual);
  const secondOpenCard = useSelector((state: StateType) => state[`CARDS`].secondOpenCard, shallowEqual);
  const isPlay = useSelector((state: StateType) => state['TIMER'].isActive);

  const openCard: CardType = ({
    ...card,
    isFlip: true,
  });

  const onClickCard = () => {
    if (!isPlay || secondOpenCard) {
      return false;
    } else if (firstOpenCard) {
      const check = () => {
        dispatch(ActionCards.checkMatchCards());
        dispatch(ActionCards.resetOpenCards());
      };

      dispatch(ActionCards.setSecondOpenCard(
        openCard,
      ));
      dispatch(ActionCards.setFlipCard(
        openCard.id,
      ));
      setTimeout(check, 700);
    } else {
      dispatch(ActionCards.setFirstOpenCard(
        openCard,
      ));
      dispatch(ActionCards.setFlipCard(
        openCard.id,
      ));
    }

    return true;
  };

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

export default CardFlip;

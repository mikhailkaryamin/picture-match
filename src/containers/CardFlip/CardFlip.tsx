import React, { useState } from 'react';
import { connect } from 'react-redux';

import { Timer } from '../../shared/types';

type Props = {
  children: React.ReactNode[];
  isPlay: boolean;
}

type State = {
  TIMER: Timer
}

const SideCard ={
  FRONT: 0,
  BACK: 1,
}

const CardFlip: React.FC<Props> = ({ children, isPlay }: Props) => {
  const [isFlipped, setFlipped] = useState(true);

  const frontRotateY = `rotateY(${
    isFlipped ? 180 : 0
  }deg)`;
  const backRotateY = `rotateY(${
    isFlipped ? 0 : -180
  }deg)`;

  return (
    <div className="card-flip"
      onClick={isPlay ? () => setFlipped(!isFlipped) : () => {}}
    >
      <div
        className="card-flip__front"
        style={{ 
          position: isFlipped ? 'relative' : 'absolute',
          transform: frontRotateY,
        }}
      >
        {children[SideCard.FRONT]}
      </div>
      <div
        className="card-flip__back"
        style={{
          position: isFlipped ? 'absolute' : 'relative',
          transform: backRotateY,
        }}
      >
        {children[SideCard.BACK]}
      </div>
    </div>
  )
}

const mapStateToProps = (state: State) => ({
  isPlay: state['TIMER'].isActive,
})

export default connect(mapStateToProps)(CardFlip);
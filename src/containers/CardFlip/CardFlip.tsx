import React, { useState } from 'react';

type Props = {
  children: React.ReactNode[];
}

const SideCard ={
  FRONT: 0,
  BACK: 1,
}

const CardFlip: React.FC<Props> = ({ children }: Props) => {
  const [isFlipped, setFlipped] = useState(true);

  const frontRotateY = `rotateY(${
    isFlipped ? 180 : 0
  }deg)`;
  const backRotateY = `rotateY(${
    isFlipped ? 0 : -180
  }deg)`;

  return (
    <div className="card-flip"
      onClick={() => setFlipped(!isFlipped)}
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

export default CardFlip;
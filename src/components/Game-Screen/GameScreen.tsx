import React from 'react';

import Container from '../Container/Container';
import Frame from '../Frame/Frame';
import GameSettings from '../Game-Settings/Game-Settings';
import Timer from '../Timer/Timer';
import Animals from '../../assets/animals/index';

const MOCK_CARDS = [
  Animals.BEAR,
  Animals.BEE,
  Animals.CHICKEN,
  Animals.DOG,
  Animals.ELEPHANT,
  Animals.FLAMINGO,
  Animals.BEAR,
  Animals.BEE,
  Animals.CHICKEN,
  Animals.DOG,
  Animals.ELEPHANT,
  Animals.FLAMINGO,
]

const GameScreen = () => {
  return (
    <Container>
      <div className="game-screen">
        <div className="game-screen__settings">
          <GameSettings />
        </div>
        <div className="game-screen__frame">
          <Frame
            cards={MOCK_CARDS}
            sizeFrame={[3, 4]}
          />
        </div>
        <div className="game-screen__timer">
          <Timer
            currentTime={`00.10`}
            bestTime={`01.00`}
          />
        </div>
      </div>
    </Container>
  )
}

export default GameScreen;
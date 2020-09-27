import React from 'react';

import Container from '../Container/Container';
import Frame from '../Frame/Frame';
import GameSettings from '../Game-Settings/Game-Settings';

const MOCK_CARDS = [
  {
    imgSrc: 'src',
    title: 'Card'
  },
  {
    imgSrc: 'src',
    title: 'Card'
  },
  {
    imgSrc: 'src',
    title: 'Card'
  },
  {
    imgSrc: 'src',
    title: 'Card'
  },
  {
    imgSrc: 'src',
    title: 'Card'
  },
  {
    imgSrc: 'src',
    title: 'Card'
  },
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
            sizeFrame={[2, 3]}
          />
        </div>
        <div className="game-screen__scoreboard">
        </div>
      </div>
    </Container>
  )
}

export default GameScreen;
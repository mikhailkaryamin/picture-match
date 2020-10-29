import React from 'react';

import Container from '../Container/Container';
import Frame from '../../containers/Frame/Frame';
import GameSettings from '../Game-Settings/Game-Settings';
import TimerContainer from '../../containers/TimerContainer/TimerContainer';


const GameScreen: React.FC = () => {
  return (
    <Container>
      <div className="game-screen">
        <div className="game-screen__settings">
          <GameSettings />
        </div>
        <div className="game-screen__frame">
          <Frame />
        </div>
        <div className="game-screen__timer">
          <TimerContainer />
        </div>
      </div>
    </Container>
  );
};

export default GameScreen;

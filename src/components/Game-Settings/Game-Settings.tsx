import React from 'react';

import Button from '../Button/Button';
import ButtonFrameSize from '../../containers/ButtonFrameSize/ButtonFrameSize';
import PlayButton from '../../containers/PlayButton/PlayButton';
import ResetButton from '../../containers/ResetButton/ResetButton';

import { ReactComponent as Music } from '../../assets/icons/music.svg';
import { ReactComponent as Sound } from '../../assets/icons/sound.svg';

const GameSettings = () => {
  return (
    <ul className="game-settings">
      <li className="game-settings__item">
        <PlayButton />
      </li>
      <li className="game-settings__item">
        <ResetButton/>
      </li>
      <li className="game-settings__item">
        <Button
          onClick={() => {}}
          title={'music'}
          prefix={'icon'}
        >
          <Music />
        </Button>
      </li>
      <li className="game-settings__item">
        <Button
          onClick={() => {}}
          title={'sound'}
          prefix={'icon'}
        >
          <Sound />
        </Button>
      </li>
      <li className="game-settings__item">
        <ButtonFrameSize
          sizeFrame={'size2x2'}
        />
      </li>
      <li className="game-settings__item">
        <ButtonFrameSize
          sizeFrame={'size2x3'}
        />
      </li>
      <li className="game-settings__item">
        <ButtonFrameSize
          sizeFrame={'size3x4'}
        />
      </li>
      <li className="game-settings__item">
        <ButtonFrameSize
          sizeFrame={'size4x5'}
        />
      </li>
      <li className="game-settings__item">
        <ButtonFrameSize
          sizeFrame={'size5x6'}
        />
      </li>
    </ul>
  )
}

export default GameSettings;
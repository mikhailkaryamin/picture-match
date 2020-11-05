import React from 'react';

import Button from '../Button/Button';
import FrameSizeButton from '../../containers/FrameSizeButton/FrameSizeButton';
import MusicButton from '../../containers/MusicButton/MusicButton';
import PlayButton from '../../containers/PlayButton/PlayButton';
import ResetButton from '../../containers/ResetButton/ResetButton';

import { ReactComponent as Sound } from '../../assets/icons/sound.svg';

import { getEmptyFunc } from '../../shared/utils';

const GameSettings: React.FC = () => {
  return (
    <ul className="game-settings">
      <li className="game-settings__item">
        <PlayButton />
      </li>
      <li className="game-settings__item">
        <ResetButton/>
      </li>
      <li className="game-settings__item">
        <MusicButton />
      </li>
      <li className="game-settings__item">
        <Button
          onClick={getEmptyFunc}
          title={'sound'}
          prefix={'icon'}
        >
          <Sound />
        </Button>
      </li>
      <li className="game-settings__item">
        <FrameSizeButton
          sizeFrame={'size2x2'}
        />
      </li>
      <li className="game-settings__item">
        <FrameSizeButton
          sizeFrame={'size2x3'}
        />
      </li>
      <li className="game-settings__item">
        <FrameSizeButton
          sizeFrame={'size3x4'}
        />
      </li>
      <li className="game-settings__item">
        <FrameSizeButton
          sizeFrame={'size4x5'}
        />
      </li>
      <li className="game-settings__item">
        <FrameSizeButton
          sizeFrame={'size5x6'}
        />
      </li>
    </ul>
  );
};

export default GameSettings;

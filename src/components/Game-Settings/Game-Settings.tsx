import React from 'react';

import Button from '../Button/Button';
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
        <Button
          onClick={() => {}}
          title={'2x2'}
          prefix={'size-frame'}
        />
      </li>
      <li className="game-settings__item">
        <Button
          onClick={() => {}}
          title={'2x3'}
          prefix={'size-frame'}
        />
      </li>
      <li className="game-settings__item">
        <Button
          onClick={() => {}}
          title={'3x4'}
          prefix={'size-frame'}
        />
      </li>
      <li className="game-settings__item">
        <Button
          onClick={() => {}}
          title={'4x5'}
          prefix={'size-frame'}
        />
      </li>
      <li className="game-settings__item">
        <Button
          onClick={() => {}}
          title={'5x6'}
          prefix={'size-frame'}
        />
      </li>
    </ul>
  )
}

export default GameSettings;
import React from 'react';

import Button from '../Button/Button';

const GameSettings = () => {
  return (
    <ul className="game-settings">
      <li className="game-settings__item">
        <Button
          onClick={() => {}}
          title={'game'}
          prefix={'round'}
        />
      </li>
      <li className="game-settings__item">
        <Button
          onClick={() => {}}
          title={'music'}
          prefix={'round'}
        />
      </li>
      <li className="game-settings__item">
        <Button
          onClick={() => {}}
          title={'sound'}
          prefix={'round'}
        />
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
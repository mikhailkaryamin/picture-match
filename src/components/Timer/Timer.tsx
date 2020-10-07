import React from 'react';

type Props = {
  currentTime: string;
  bestTime: string;
}

const ScoreBoard = ({currentTime, bestTime}: Props) => {
  return (
    <div className="score-board">
      <div className="score-board__wrapper">
        <span className="score-board__time score-board__time--current">
          {currentTime}
        </span>
        <span className="score-board__time score-board__time--best">
          {bestTime}
        </span>
      </div>
    </div>
  )
}

export default ScoreBoard;
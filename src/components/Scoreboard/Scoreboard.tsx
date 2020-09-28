import React from 'react';

const ScoreBoard = () => {
  return (
    <div className="score-board">
      <div className="score-board__wrapper">
        <span className="score-board__time score-board__time--current">
          10.00
        </span>
        <span className="score-board__time score-board__time--best">
          05.00
        </span>
      </div>
    </div>
  )
}

export default ScoreBoard;
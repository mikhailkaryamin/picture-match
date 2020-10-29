import React from 'react';

type Props = {
  currentTime: string;
  bestTime: string;
}

const ScoreBoard: React.FC<Props> = ({ currentTime, bestTime }: Props) => {
  return (
    <div className="timer">
      <div className="timer__wrapper">
        <span className="timer__time timer__time--current">
          {currentTime}
        </span>
        <span className="timer__time timer__time--best">
          {bestTime}
        </span>
      </div>
    </div>
  );
};

export default ScoreBoard;

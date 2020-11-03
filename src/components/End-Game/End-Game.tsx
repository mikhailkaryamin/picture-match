import React from 'react';

type Props = {
  currentTime: string;
  bestTime: string;
}

const EndGame: React.FC<Props> = ({ currentTime, bestTime }: Props) => {
  return (
    <div className="end-game">
      <div className="end-game__row">
        Ваш результат:
        <span className="end-game__time">
          { currentTime }
        </span>
      </div>
      <div className="end-game__row">
        Лучший результат:
        <span className="end-game__time">
          { bestTime }
        </span>
      </div>
    </div>
  );
};

export default EndGame;

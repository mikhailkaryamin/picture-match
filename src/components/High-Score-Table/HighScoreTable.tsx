import React from 'react';

const HighScoreTable: React.FC = () => {
  return (
    <div className="high-score-table">
      <h1 className="high-score-table__title">
        High score
      </h1>
      <div className="high-score-table__row">
        <div className="high-score-table__cell high-score-table__cell--rank">
          1
        </div>
        <div className="high-score-table__cell high-score-table__cell--name">
          Mikhail
        </div>
        <div className="high-score-table__cell high-score-table__cell--time">
          00.10
        </div>
      </div>
    </div>
  );
};

export default HighScoreTable;

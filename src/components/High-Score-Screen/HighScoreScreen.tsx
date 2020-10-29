import React from 'react';

import Container from '../Container/Container';
import HighScoreTable from '../High-Score-Table/HighScoreTable';

const HighScoreScreen: React.FC = () => {
  return (
    <Container>
      <div className="high-score-screen">
        <HighScoreTable />
      </div>
    </Container>
  );
};

export default HighScoreScreen;

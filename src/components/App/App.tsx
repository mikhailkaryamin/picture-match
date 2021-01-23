import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { AppRoute } from '../../shared/routes';

import GameScreen from '../Game-Screen/GameScreen';
import HighScoreScreen from '../High-Score-Screen/HighScoreScreen';
import MainScreen from '../Main-Screen/MainScreen';

const BASE_NAME = '/picture-match';

const App: React.FC = () => {
  return (
    <Router basename={BASE_NAME}>
      <Switch>
        <Route exact path={AppRoute.MAIN} render={() => <MainScreen />} />
        <Route exact path={AppRoute.GAME} render={() => <GameScreen />} />
        <Route exact path={AppRoute.HIGH_SCORE} render={() => <HighScoreScreen />} />
      </Switch>
    </Router>
  );
};

export default App;

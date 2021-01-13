import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import { AppRoute } from '../../shared/routes';

import GameScreen from '../Game-Screen/GameScreen';
import HighScoreScreen from '../High-Score-Screen/HighScoreScreen';
import MainScreen from '../Main-Screen/MainScreen';

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path={AppRoute.MAIN}>
          <MainScreen />
        </Route>
        <Route path={AppRoute.GAME}>
          <GameScreen />
        </Route>
        <Route path={AppRoute.HIGH_SCORE}>
          <HighScoreScreen />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;

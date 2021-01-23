import * as React from 'react';
import {
  useDispatch,
  useSelector
} from 'react-redux';
import { useInterval } from 'react-use';

import Timer from '../../components/Timer/Timer';
import { ActionCreator as ActionTimer } from '../../actions/timer';

import { ONE_SEC } from '../../shared/consts';
import {
  State as StateType
} from '../../shared/types';
import { formatTime } from '../../shared/utils';

const TimerContainer: React.FC = () => {
  const dispatch = useDispatch();

  const bestTime = useSelector((state: StateType) => state['TIMER'].bestTime);
  const isActive = useSelector((state: StateType) => state['TIMER'].isActive);
  const time = useSelector((state: StateType) => state['TIMER'].time);

  useInterval(
    () => {
      dispatch(ActionTimer.setTime(time + 1));
    },
    isActive ? ONE_SEC : null,
  );

  return (
    <Timer
      currentTime={formatTime(time)}
      bestTime={formatTime(bestTime)}
    />
  );
};


export default TimerContainer;

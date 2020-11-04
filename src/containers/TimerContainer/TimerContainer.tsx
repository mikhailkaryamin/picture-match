import * as React from 'react';
import { connect } from 'react-redux';
import { useInterval } from 'react-use';

import Timer from '../../components/Timer/Timer';
import { ActionCreator as ActionTimer } from '../../actions/timer';

import { ONE_SEC } from '../../shared/consts';
import {
  ActionsTimer,
  State as StateType
} from '../../shared/types';
import { formatTime } from '../../shared/utils';

type Dispatch = (arg: ActionsTimer) => void;

type Props = {
  bestTime: number;
  isActive: boolean;
  setTime: (time: number) => void;
  time: number;
}

const TimerContainer: React.FC<Props> = ({ bestTime, isActive, setTime, time }: Props) => {
  useInterval(
      () => {
        setTime(time + 1);
      },
      isActive ? ONE_SEC : null
  );

  return (
    <Timer
      currentTime={formatTime(time)}
      bestTime={formatTime(bestTime)}
    />
  );
};


const mapStateToProps = (state: StateType) => ({
  bestTime: state['TIMER'].bestTime,
  isActive: state['TIMER'].isActive,
  time: state['TIMER'].time,
});


const mapDispatchToProps = (dispatch: Dispatch) => ({
  setTime: (time: number) => {
    dispatch(ActionTimer.setTime(time));
  }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TimerContainer);

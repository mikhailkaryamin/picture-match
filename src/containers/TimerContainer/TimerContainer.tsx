import * as React from 'react';
import { connect } from 'react-redux';
import { useInterval } from 'react-use';

import Timer from '../../components/Timer/Timer';
import { ActionCreator as ActionTimer } from '../../actions/timer';

import {
  ActionSetTimer,
  State as StateType
} from '../../shared/types';

type Dispatch = (arg: ActionSetTimer) => void;

type Props = {
  isActive: boolean;
  setTime: (time: number) => void;
  time: number;
}

const ONE_SEC = 1000;

const format = (seconds: number) => {
  const pad = (time: string, length: number) => {
    while (time.length < length) {
      time = '0' + time;
    }

    return time;
  };

  const time = new Date(seconds * ONE_SEC);

  const m = pad(time.getMinutes().toString(), 2);
  const s = pad(time.getSeconds().toString(), 2);

  return `${m} : ${s}`;
};

const TimerContainer: React.FC<Props> = ({ isActive, setTime, time }: Props) => {
  useInterval(
      () => {
        setTime(time + 1);
      },
      isActive ? ONE_SEC : null
  );

  return (
    <Timer
      currentTime={format(time)}
      bestTime="03.00"
    />
  );
};


const mapStateToProps = (state: StateType) => ({
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

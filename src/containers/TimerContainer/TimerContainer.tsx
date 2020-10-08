import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import Timer from '../../components/Timer/Timer';
import { ActionCreator as ActionTimer } from '../../actions/timer';

type State = {
  TIMER: {
    time: Date;
    isOn: boolean;
  }
}

type Props = {
  isOn: boolean;
  time: Date;
  tick: (time: number) => void;
}

const format = (time: Date) => {
  const pad = (time: string, length: number) => {
    while (time.length < length) {
      time = '0' + time;
    }

    return time;
  }

  time = new Date(time);

  let m = pad(time.getMinutes().toString(), 2);
  let s = pad(time.getSeconds().toString(), 2);
  return `${m} : ${s}`;
}

const TimerContainer = ({ isOn, time, tick }: Props) => {

  useEffect(() => {
    let interval = null;

    if (isOn && interval === null) {

      interval = setInterval(() => {
        tick(Date.now());
      }, 1000);
    }

    if (!isOn && interval !== null) {

      clearInterval(interval);
      interval = null;
    }
  })

  return (
    <Timer
      currentTime={format(time)}
      bestTime="03.00"
    />
  )
};

const mapStateToProps = (state: State) => ({
  isOn: state['TIMER'].isOn,
  time: state['TIMER'].time,
});

const mapDispatchToProps = (dispatch: Function) => ({
  tick: (time: number) => {
    dispatch(ActionTimer.tick(time))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
  )(TimerContainer);

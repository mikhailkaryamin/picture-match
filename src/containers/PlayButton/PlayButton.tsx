import React from 'react';
import { connect } from 'react-redux'

import Button from '../../components/Button/Button';
import { ReactComponent as Play } from '../../assets/icons/play.svg';
import { ReactComponent as Pause } from '../../assets/icons/pause.svg';
import { ActionCreator as ActionTimer } from '../../actions/timer';

import { Timer } from '../../shared/types';

type Props = {
  isPlay: boolean;
  start: () => void;
  stop: () => void;
}

type State = {
  TIMER: Timer
}

const PlayButton = ({ isPlay, start, stop }: Props) => {
  return (
    <Button
      onClick={isPlay ? stop : start}
      title={'game'}
      prefix={'icon'}
    >
      {isPlay ? <Pause /> : <Play />}
    </Button>
  )
}

const mapStateToProps = (state: State) => ({
  isPlay: state['TIMER'].isActive,
})

const mapDispatchToProps = (dispatch: Function) => ({
  start: () => {
    dispatch(ActionTimer.setActive(
      true
    ))
  },
  stop: () => {
    dispatch(ActionTimer.setActive(
      false
    ))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PlayButton);
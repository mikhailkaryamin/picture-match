import React from 'react';
import { connect } from 'react-redux';

import Button from '../../components/Button/Button';
import { ReactComponent as ResetIcon } from '../../assets/icons/restart.svg';
import { ActionCreator as ActionTimer } from '../../actions/timer';

import { State as StateType } from '../../shared/types';

type Props = {
  isActive: boolean;
  reset: () => void;
  time: number;
}

const ResetButton = ({ time, reset }: Props) => {
  return(
    <Button
      onClick={reset}
      title={'reset'}
      prefix={'icon'}
      isDisabled={!!!time}
    >
      <ResetIcon />
    </Button>
  )
}

const mapStateToProps = (state: StateType) => ({
  isActive: state['TIMER'].isActive,
  time: state['TIMER'].time,
})

const mapDispatchToProps = (dispatch: Function) => ({
  reset: () => {
    dispatch(ActionTimer.resetTimer())
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ResetButton);
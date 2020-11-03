import React from 'react';
import { connect } from 'react-redux';

import Button from '../../components/Button/Button';
import { ReactComponent as ResetIcon } from '../../assets/icons/restart.svg';

import { ActionCreator as ActionTimer } from '../../actions/timer';
import { ActionCreator as ActionCards } from '../../actions/cards';

import {
  Action,
  State as StateType
} from '../../shared/types';

type Dispatch = (arg: Action) => void;

type Props = {
  isActive: boolean;
  reset: () => void;
  time: number;
}

const ResetButton: React.FC<Props> = ({ time, reset }: Props) => {
  const isDisabled = time === 0;

  return (
    <Button
      onClick={reset}
      title={'reset'}
      prefix={'icon'}
      isDisabled={isDisabled}
    >
      <ResetIcon />
    </Button>
  );
};

const mapStateToProps = (state: StateType) => ({
  isActive: state['TIMER'].isActive,
  time: state['TIMER'].time,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  reset: () => {
    dispatch(ActionTimer.resetTimer());
    dispatch(ActionCards.resetCards());
  }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(ResetButton);

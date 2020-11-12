import React from 'react';
import {
  useDispatch,
  useSelector,
} from 'react-redux';

import Button from '../../components/Button/Button';
import { ReactComponent as ResetIcon } from '../../assets/icons/restart.svg';

import { ActionCreator as ActionTimer } from '../../actions/timer';
import { ActionCreator as ActionCards } from '../../actions/cards';

import {
  State as StateType
} from '../../shared/types';


const ResetButton: React.FC = () => {
  const dispatch = useDispatch();

  const time = useSelector((state: StateType) => state['TIMER'].time);
  const isDisabled = time === 0;

  const reset = () => {
    dispatch(ActionTimer.resetTimer());
    dispatch(ActionCards.resetCards());
  };

  return (
    <Button
      onClick={reset}
      title={'Reset game'}
      prefix={'icon'}
      isDisabled={isDisabled}
    >
      <ResetIcon />
    </Button>
  );
};

export default ResetButton;

import React from 'react';
import {
  useDispatch,
  useSelector,
} from 'react-redux';

import Button from '../../components/Button/Button';
import { ReactComponent as Play } from '../../assets/icons/play.svg';
import { ReactComponent as Pause } from '../../assets/icons/pause.svg';

import { ActionCreator as ActionTimer } from '../../actions/timer';

import { State as StateType } from '../../shared/types';


const PlayButton: React.FC = () => {
  const dispatch = useDispatch();

  const isPlay = useSelector((state: StateType) => state['TIMER'].isActive);
  const start = () => dispatch(ActionTimer.setActive(true));
  const stop = () => dispatch(ActionTimer.setActive(false));

  return (
    <Button
      onClick={isPlay ? stop : start}
      title={'Play game'}
      prefix={'icon'}
    >
      {isPlay ? <Pause /> : <Play />}
    </Button>
  );
};

export default PlayButton;

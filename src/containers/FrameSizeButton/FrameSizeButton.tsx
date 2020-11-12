import React from 'react';
import { useDispatch } from 'react-redux';

import Button from '../../components/Button/Button';

import { ActionCreator as ActionCards } from '../../actions/cards';

interface FrameSizeType {
  size2x2: number[],
  size2x3: number[],
  size3x4: number[],
  size4x5: number[],
  size5x6: number[],
}

type Props = {
  sizeFrame: keyof FrameSizeType;
}

const FrameSize: FrameSizeType = {
  size2x2: [2, 2],
  size2x3: [2, 3],
  size3x4: [3, 4],
  size4x5: [4, 5],
  size5x6: [5, 6],
};

const ButtonFrameSize: React.FC<Props> = ({ sizeFrame }: Props) => {
  const dispatch = useDispatch();
  const title = sizeFrame.slice(-3);

  return (
    <Button
      onClick={() => {
        dispatch(ActionCards.setFrameSize(FrameSize[sizeFrame]));
        dispatch(ActionCards.setNumberOfCards(
            FrameSize[sizeFrame][0] * FrameSize[sizeFrame][1]
        ));
      }}
      prefix={'size-frame'}
      title={title}
    />
  );
};


export default ButtonFrameSize;

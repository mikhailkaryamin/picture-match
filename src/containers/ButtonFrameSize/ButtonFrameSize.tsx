import React from 'react';
import { connect } from 'react-redux';

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
  setSizeFrame: (size: number[]) => void;
  sizeFrame: keyof FrameSizeType;
}

const FrameSize: FrameSizeType = {
  size2x2: [2, 2],
  size2x3: [2, 3],
  size3x4: [3, 4],
  size4x5: [4, 5],
  size5x6: [5, 6],
};

const ButtonFrameSize = ({setSizeFrame, sizeFrame}: Props) => {
  const title = sizeFrame.slice(-3);

  return (
    <Button
      onClick={() => setSizeFrame(FrameSize[sizeFrame])}
      prefix={'size-frame'}
      title={title}
    />
  )
}

const mapDispatchToProps = (dispatch: Function) => ({
  setSizeFrame: (size: number[]) => {
    dispatch(ActionCards.setFrameSize(
      size
    ))
    dispatch(ActionCards.setNumberOfCards(
      size[0] * size[1]
    ))
  }
})

export default connect(
  null,
  mapDispatchToProps
)(ButtonFrameSize);
import * as React from 'react';

type Props = {
  children: React.ReactNode;
}

const Wrapper: React.FC<Props> = (props: Props) => {
  const {
    children
  } = props;

  return (
    <div className="game-container">
      {children}
    </div>
  )
}

export default Wrapper;
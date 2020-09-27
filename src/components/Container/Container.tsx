import React from 'react';

type Props = {
  children: React.ReactNode;
}

const Container: React.FC<Props> = ({ children }: Props) => {
  return (
    <div className="game-container">
      {children}
    </div>
  )
}

export default Container;
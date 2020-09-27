import React from 'react';

import Container from '../Container/Container';
import Menu from '../Menu/Menu';

const MainScreen = () => {
  return (
    <Container>
      <div className="main-screen">
        <div className="main-screen__wrapper">
          <Menu />
        </div>
      </div>
    </Container>
  )
}

export default MainScreen;
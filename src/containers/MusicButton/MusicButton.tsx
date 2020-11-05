import React, { useState } from 'react';
import { useAudio } from 'react-use';

import Button from '../../components/Button/Button';

import { ReactComponent as Music } from '../../assets/icons/music.svg';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const music = require('../../assets/audio/music.mp3');

const MusicButton: React.FC = () => {
  const [audio,, controls] = useAudio({
    src: `${music}`,
    loop: true
  });
  const [isMusicOn, setMusicOn] = useState(false);

  const controlMusic = () => {
    if (isMusicOn) {
      controls.pause();
      setMusicOn(false);
    } else {
      controls.play();
      setMusicOn(true);
    }
  };

  return (
    <>
      {audio}
      <Button
        onClick={controlMusic}
        title={`Music`}
        prefix={`icon`}
      >
        <Music />
      </Button>
    </>
  );
};

export default MusicButton;

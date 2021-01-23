import React, { useState } from 'react';
import { useAudio } from 'react-use';

import Button from '../../components/Button/Button';

import { ReactComponent as Music } from '../../assets/icons/music.svg';
import { ReactComponent as MusicOff } from '../../assets/icons/music-off.svg';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const music = require('../../assets/audio/music.mp3');

const MusicButton: React.FC = () => {
  const [audio,, controls] = useAudio({
    src: `${music}`,
    loop: true,
  });
  const [isMusicOn, setMusicOn] = useState(false);
  const [iconMusic, setIconMusic] = useState(<Music />);

  const controlMusic = () => {
    if (isMusicOn) {
      setMusicOn(false);
      setIconMusic(<Music />);
      controls.pause();
    } else {
      setMusicOn(true);
      setIconMusic(<MusicOff />);
      controls.play();
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
        {iconMusic}
      </Button>
    </>
  );
};

export default MusicButton;

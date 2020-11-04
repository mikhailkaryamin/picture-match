import { ONE_SEC } from './consts';

export const formatTime = (seconds: number): string => {
  const pad = (time: string, length: number) => {
    while (time.length < length) {
      time = '0' + time;
    }

    return time;
  };

  const time = new Date(seconds * ONE_SEC);

  const m = pad(time.getMinutes().toString(), 2);
  const s = pad(time.getSeconds().toString(), 2);

  return `${m} : ${s}`;
};

export const getEmptyFunc = (): string => {
  return ('empty');
};

export const shuffle = <T extends unknown>(array: T[]): T[] => {
  const shuffleArray = array.slice();

  for (let i = shuffleArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffleArray[i], shuffleArray[j]] = [shuffleArray[j], shuffleArray[i]];
  }

  return shuffleArray;
};

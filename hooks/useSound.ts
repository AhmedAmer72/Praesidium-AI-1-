
import { useCallback } from 'react';
import { Howl } from 'howler';

// In a real project, these would be local assets
const soundUrls = {
  click: 'https://cdn.pixabay.com/download/audio/2022/03/15/audio_16cba212a6.mp3?filename=ui-click-43196.mp3',
  hover: 'https://cdn.pixabay.com/download/audio/2022/03/10/audio_c3651236d2.mp3?filename=mouse-click-153941.mp3',
  connect: 'https://cdn.pixabay.com/download/audio/2022/11/17/audio_8453483d2e.mp3?filename=interface-124464.mp3',
  disconnect: 'https://cdn.pixabay.com/download/audio/2021/08/04/audio_a5fa9f20e9.mp3?filename=negative_beeps-6008.mp3',
  success: 'https://cdn.pixabay.com/download/audio/2022/01/18/audio_13346e3333.mp3?filename=success-1-6297.mp3',
};

const sounds = {
  click: new Howl({ src: [soundUrls.click], volume: 0.3 }),
  hover: new Howl({ src: [soundUrls.hover], volume: 0.1 }),
  connect: new Howl({ src: [soundUrls.connect], volume: 0.5 }),
  disconnect: new Howl({ src: [soundUrls.disconnect], volume: 0.4 }),
  success: new Howl({ src: [soundUrls.success], volume: 0.6 }),
};

type SoundType = keyof typeof sounds;

const useSound = () => {
  const playSound = useCallback((sound: SoundType) => {
    sounds[sound].play();
  }, []);

  return {
    playClick: () => playSound('click'),
    playHover: () => playSound('hover'),
    playConnect: () => playSound('connect'),
    playDisconnect: () => playSound('disconnect'),
    playSuccess: () => playSound('success'),
  };
};

export default useSound;

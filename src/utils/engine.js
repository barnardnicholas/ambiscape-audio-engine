const sounds = require("../data/sounds");
const { Howl, Howler } = require("howler");

const baseURL = "../audio";

const howls = [];

export const initSound = sound => {
  const paths = sound.urls.map(url => {
    return `${baseURL}${url}`;
  });
  const thisHowl = new Howl({
    src: paths,
    volume: sound.volume || 0.7,
    stereo: sound.stereo || 0.5,
    loop: sound.loop || false,
    sprite: sound.sprite
  });
  return thisHowl;
};

const loadSounds = () => {
  sounds.forEach(sound => {
    howls.push(initSound(sound));
  });
};

export const loop = () => {};

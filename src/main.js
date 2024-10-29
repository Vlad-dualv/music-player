const controls = {
  backwardBtn: document.querySelector('.backward-icon'),
  forwardBtn: document.querySelector('.forward-icon'),
  playBtn: document.getElementById('play-icon'),
};

const progress = document.getElementById('progress');
const song = document.getElementById('song');

song.onloadedmetadata = function () {};

const controls = {
  backwardBtn: document.querySelector('.backward-icon'),
  forwardBtn: document.querySelector('.forward-icon'),
  playControl: document.querySelector('.play-control'),
};

const progress = document.getElementById('progress');
const song = document.getElementById('song');
let isPlaying = false;

song.onloadedmetadata = function () {
  progress.max = song.duration;
  progress.value = song.currentTime;
};

controls.playControl.addEventListener('click', playPause);

function playPause() {
  if (isPlaying) {
    song.pause();
    controls.playControl.innerHTML = `<svg
              class="icon play-icon"
              width="40"
              height="40"
              aria-label="play icon"
            >
              <path d="m6 4 20 12L6 28z"></path>
            </svg>`;
    isPlaying = false;
  } else {
    song.play();
    controls.playControl.innerHTML = `<svg
              class="icon play-icon"
              width="40"
              height="40"
              aria-label="pause icon"
            >
              <path d="M4 4h10v24H4zm14 0h10v24H18z"></path>
            </svg>`;
    isPlaying = true;
  }
}

song.addEventListener('timeupdate', function () {
  progress.value = song.currentTime;
});

progress.oninput = function () {
  song.play();
  song.currentTime = progress.value;
  isPlaying = false;
  playPause();
};

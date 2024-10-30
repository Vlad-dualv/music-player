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
    controls.playControl.innerHTML = displayPlayIcon();
    isPlaying = false;
  } else {
    song.play();
    controls.playControl.innerHTML = displayPauseIcon();
    isPlaying = true;
  }

  function displayPlayIcon() {
    return `<svg
              class="icon play-icon"
              width="40"
              height="40"
              aria-label="play icon"
            >
              <use href="./img/icons.svg#icon-play3"></use>
            </svg>`;
  }

  function displayPauseIcon() {
    return `<svg
              class="icon play-icon"
              width="40"
              height="40"
              aria-label="pause icon"
            >
              <use href="./img/icons.svg#icon-pause2"></use>
            </svg>`;
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

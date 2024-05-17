const audio = document.getElementById('audio');
const playPauseButton = document.getElementById('play-pause');
const progressBar = document.querySelector('.progress');
const currentTimeElement = document.querySelector('.current-time');
const durationElement = document.querySelector('.duration');

let isPlaying = false;

playPauseButton.addEventListener('click', () => {
    if (isPlaying) {
        audio.pause();
        playPauseButton.querySelector('img').src = '../icons/play.png';
    } else {
        audio.play();
        playPauseButton.querySelector('img').src = '../icons/pause.png';
    }
    isPlaying = !isPlaying;
});

audio.addEventListener('timeupdate', () => {
    const currentTime = audio.currentTime;
    const duration = audio.duration;
    progressBar.value = (currentTime / duration) * 100;
    currentTimeElement.textContent = formatTime(currentTime);
    durationElement.textContent = formatTime(duration);
});

progressBar.addEventListener('input', () => {
    const duration = audio.duration;
    audio.currentTime = (progressBar.value / 100) * duration;
});

function formatTime(time) {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

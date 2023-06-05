document.addEventListener('DOMContentLoaded', function() {
  const videoWrappers = document.querySelectorAll('.video-wrapper');

  videoWrappers.forEach((wrapper) => {
    const video = wrapper.querySelector('video');
    const playButton = wrapper.querySelector('.play-button');

    if (video && playButton) {
      const togglePlay = () => {
        if (video.paused || video.ended) {
          video.play();
          playButton.style.display = 'none';
        } else {
          video.pause();
          playButton.style.display = 'flex';
        }
      };

      playButton.addEventListener('click', togglePlay);
      video.addEventListener('click', togglePlay);
    }
  });
});

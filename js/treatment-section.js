let listVideo = document.querySelectorAll('.video-list .vid');
let mainVideo = document.querySelector('.main-video video');
let title = document.querySelector('.main-video .title');

listVideo.forEach(video => {
  video.onclick = () => {
    listVideo.forEach(vid => vid.classList.remove('active'));
    video.classList.add('active');
    
    if (video.classList.contains('active')) {
      let src = video.children[0].getAttribute('src');
      mainVideo.src = src;
      
      let text = video.children[1].innerHTML;
      title.innerHTML = text;
      
      // Reset the poster attribute of the main video
      mainVideo.removeAttribute('poster');
    }
  };
});


var video = document.getElementById("myVideo");
var playButton = document.getElementById("playButton");
var playIcon = document.getElementById("playIcon");

function toggleVideo() {
  if (video.paused) {
    video.play();
    playIcon.style.display = "none";
    playText.style.display = "none";
  } else {
    video.pause();
    playIcon.style.display = "block";
    playText.style.display = "block";
  }
}

video.addEventListener("play", function() {
  playIcon.style.display = "none";
  playText.style.display = "none";
});

video.addEventListener("pause", function() {
  playIcon.style.display = "block";
  playText.style.display = "block";
});
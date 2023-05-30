window.addEventListener('DOMContentLoaded', function() {
  var welcomeSection = document.getElementById('welcome-section');

  setTimeout(function() {
    welcomeSection.classList.add('fade-out');

    setTimeout(function() {
      welcomeSection.style.display = 'none';
    }, 1000);
  }, 2000);
});




window.addEventListener('DOMContentLoaded', function() {
  var welcomeSound = new Audio('../sound/welcome.mp3');

  // Play the welcome sound
  welcomeSound.play();

  // Handle audio play error
  welcomeSound.addEventListener('error', function() {
    console.error('Error playing welcome sound.');
  });
});


window.addEventListener('DOMContentLoaded', function() {
  var navElement = document.querySelector('.navbar');

  navElement.style.display = 'none';

  setTimeout(function() {
    navElement.style.display = '';
  }, 2500);
});


  
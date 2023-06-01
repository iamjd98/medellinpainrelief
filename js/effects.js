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

window.addEventListener('DOMContentLoaded', function() {
  var testimonialSection = document.querySelector('.treatment-section');

  testimonialSection.style.display = 'none';

  setTimeout(function() {
    testimonialSection.style.display = '';
  }, 2500);
});

function scrollToTreatmentSection(event) {
  event.preventDefault();
  
  const sectionId = event.target.getAttribute('href');
  const section = document.querySelector(sectionId);
  const sectionTop = section.offsetTop;
  
  window.scrollTo({
    top: sectionTop,
    behavior: 'smooth'
  });
}

function scrollToHeroSection(event) {
  event.preventDefault();

  const sectionId = event.target.getAttribute('href');
  const section = document.querySelector(sectionId);

  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}
  
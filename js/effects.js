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
  
function scrollToTestimonialSection(event) {
  event.preventDefault();

  const sectionId = event.target.getAttribute('href');
  const section = document.querySelector(sectionId);

  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}

function scrollToServicesSection(event) {
  event.preventDefault();

  const sectionId = event.target.getAttribute('href');
  const section = document.querySelector(sectionId);

  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}

function scrollToAboutSection(event) {
  event.preventDefault();

  const sectionId = event.target.getAttribute('href');
  const section = document.querySelector(sectionId);

  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}

function scrollToLocationSection(event) {
  event.preventDefault();

  const sectionId = event.target.getAttribute('href');
  const section = document.querySelector(sectionId);

  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}

function scrollToContactUsSection(event) {
  event.preventDefault();

  const sectionId = event.target.getAttribute('href');
  const section = document.querySelector(sectionId);

  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}

window.addEventListener('scroll', function() {
  var backToTopButton = document.querySelector('.back-to-top');
  if (window.pageYOffset > 300) {
    backToTopButton.classList.add('show');
  } else {
    backToTopButton.classList.remove('show');
  }
});

document.querySelector('.back-to-top').addEventListener('click', function(e) {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

document.addEventListener("DOMContentLoaded", function() {
  var scrollArrow = document.getElementById("scroll-arrow");

  window.addEventListener("scroll", function() {
    if (window.scrollY > 20) {
      scrollArrow.classList.add("hidden");
    } else {
      scrollArrow.classList.remove("hidden");
    }
  });
});


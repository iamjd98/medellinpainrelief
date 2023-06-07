document.addEventListener("DOMContentLoaded", function() {
    var servicesSection = document.getElementById('services-section');
    var servicesTextCon = servicesSection.getElementsByClassName('services-text-con');
    var isVisible = false;
  
    // Hide all services text initially
    for (var i = 0; i < servicesTextCon.length; i++) {
      var textCon = servicesTextCon[i];
      var checkmarkIcon = textCon.querySelector('img');
      var servicesText = textCon.querySelector('h5');
      textCon.style.opacity = 0;
      checkmarkIcon.style.display = 'none';
      servicesText.style.display = 'none';
    }
  
    // Check if the services section is in the viewport
    function isInViewport(element) {
      var rect = element.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
      );
    }
  
    // Show services text one by one with a delay
    function showServicesText() {
      if (isVisible) return;
  
      isVisible = true;
  
      var index = 0;
      var intervalId = setInterval(function() {
        if (index < servicesTextCon.length) {
          var textCon = servicesTextCon[index];
          var checkmarkIcon = textCon.querySelector('img');
          var servicesText = textCon.querySelector('h5');
          textCon.style.opacity = 1;
          checkmarkIcon.style.display = 'inline-block';
          servicesText.style.display = 'block';
          index++;
        } else {
          clearInterval(intervalId);
        }
      }, 300); // Delay each service text by 300ms
    }
  
    // Check if the services section is in the viewport and show services text
    function checkServicesVisibility() {
      if (window.innerWidth >= 576 && isInViewport(servicesSection)) {
        showServicesText();
      } else {
        isVisible = false;
      }
    }
  
    // Trigger initial check on page load
    checkServicesVisibility();
  
    // Attach scroll and resize event listeners
    window.addEventListener('scroll', checkServicesVisibility);
    window.addEventListener('resize', checkServicesVisibility);
  });
  
document.addEventListener("DOMContentLoaded", function() {
  var serviceSection = document.getElementById("services-section");
  var checkmarks = serviceSection.querySelectorAll("img[src='./photos/check-mark-7-64.ico']");
  var lastVisibleIndex = -1;

  function fadeIn(element) {
    element.style.opacity = 0;
    var opacity = 0;
    var increment = 0.01;
    var interval = 10;
    var fadeInInterval = setInterval(function() {
      opacity += increment;
      element.style.opacity = opacity;

      if (opacity >= 1) {
        clearInterval(fadeInInterval);
      }
    }, interval);
  }

  function handleIntersection(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        var visibleCheckmarks = Array.from(checkmarks).slice(lastVisibleIndex + 1);
        visibleCheckmarks.forEach(function(checkmark, index) {
          setTimeout(function() {
            fadeIn(checkmark);
          }, (index + 1) * 300);
        });
        lastVisibleIndex += visibleCheckmarks.length;
      }
    });
  }

  var options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5
  };

  var observer = new IntersectionObserver(handleIntersection, options);
  observer.observe(serviceSection);
});

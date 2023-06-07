document.addEventListener("DOMContentLoaded", function() {
    var serviceSection = document.getElementById("services-section");
    var checkmarks = serviceSection.querySelectorAll("img[src='./photos/check-mark-7-64.ico']");
    for (var i = 0; i < checkmarks.length; i++) {
      checkmarks[i].style.opacity = 0;
    }
    
    var lastVisibleIndex = -1; 
    
    function handleScroll() {
      var scrollPosition = window.scrollY || window.pageYOffset;
      var sectionTop = serviceSection.offsetTop;
      var windowHeight = window.innerHeight;
      
      if (scrollPosition > sectionTop - windowHeight && scrollPosition < sectionTop) {
        var offset = scrollPosition - (sectionTop - windowHeight);
        var opacity = offset / windowHeight;
        
        var checkmarkIndex = Math.floor(opacity * checkmarks.length);
        if (checkmarkIndex > lastVisibleIndex) {
          for (var i = lastVisibleIndex + 1; i <= checkmarkIndex; i++) {
            setTimeout(function(index) {
              checkmarks[index].style.opacity = 1;
            }, (i - lastVisibleIndex) * 300, i);
          }
          lastVisibleIndex = checkmarkIndex;
        }
      }
    }
    
    window.addEventListener("scroll", handleScroll);
  });
  
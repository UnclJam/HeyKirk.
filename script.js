
document.addEventListener('DOMContentLoaded', function() {
  const servicesVideo = document.getElementById('services-video');

  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function handleScroll() {
    if (isInViewport(servicesVideo)) {
      servicesVideo.play();
    } else {
      servicesVideo.pause();
    }
  }

  window.addEventListener('scroll', handleScroll);
  handleScroll(); // Call the function once on page load to handle the initial state
});

// JavaScript code
document.body.style.cursor = "url('../Handyman/img/hammer.cur'), auto";

var links = document.getElementsByTagName("a");
for (var i = 0; i < links.length; i++) {
  links[i].addEventListener("mouseover", function() {
    this.style.cursor = "url('../Handyman/img/hammer.cur'), auto";
  });
}


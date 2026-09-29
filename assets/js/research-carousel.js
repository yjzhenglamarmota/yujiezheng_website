(function () {
  function initializeCarousel(carousel) {
    var slides = Array.prototype.slice.call(carousel.querySelectorAll('[data-research-slide]'));
    var dots = Array.prototype.slice.call(carousel.querySelectorAll('[data-research-dot]'));
    var previous = carousel.querySelector('[data-research-previous]');
    var next = carousel.querySelector('[data-research-next]');
    var activeIndex = 0;

    function showSlide(index, focusDot) {
      activeIndex = (index + slides.length) % slides.length;
      slides.forEach(function (slide, slideIndex) {
        var isActive = slideIndex === activeIndex;
        slide.classList.toggle('is-active', isActive);
        slide.setAttribute('aria-hidden', String(!isActive));
      });
      dots.forEach(function (dot, dotIndex) {
        var isActive = dotIndex === activeIndex;
        dot.classList.toggle('is-active', isActive);
        dot.setAttribute('aria-selected', String(isActive));
        dot.setAttribute('tabindex', isActive ? '0' : '-1');
      });
      if (focusDot) dots[activeIndex].focus();
    }

    previous.addEventListener('click', function () { showSlide(activeIndex - 1, false); });
    next.addEventListener('click', function () { showSlide(activeIndex + 1, false); });
    dots.forEach(function (dot, index) {
      dot.addEventListener('click', function () { showSlide(index, false); });
      dot.addEventListener('keydown', function (event) {
        if (event.key === 'ArrowLeft') {
          event.preventDefault();
          showSlide(activeIndex - 1, true);
        } else if (event.key === 'ArrowRight') {
          event.preventDefault();
          showSlide(activeIndex + 1, true);
        }
      });
    });
    showSlide(0, false);
  }

  document.addEventListener('DOMContentLoaded', function () {
    Array.prototype.forEach.call(document.querySelectorAll('[data-research-carousel]'), initializeCarousel);
  });
}());

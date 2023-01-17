var slides = document.querySelectorAll('.slide');
var currentSlide = 0;
var prevButton = document.querySelector('.prev-slide');
var nextButton = document.querySelector('.next-slide');
var indicators = document.querySelectorAll('.indicator-item');

prevButton.addEventListener('click', function(e) {
    e.preventDefault();
    prevSlide();
});

nextButton.addEventListener('click', function(e) {
    e.preventDefault();
    nextSlide();
});

indicators.forEach(function(indicator, index) {
  indicator.addEventListener('click', function() {
    currentSlide = index;
    updateSlide();
  });
});

function prevSlide() {
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = slides.length - 1;
  }
  updateSlide();
}

function nextSlide() {
  currentSlide++;
  if (currentSlide > slides.length - 1) {
    currentSlide = 0;
  }
  updateSlide();
}

function updateSlide() {
  slides.forEach(function(slide) {
    slide.style.display = 'none';
  });
  indicators.forEach(function(indicator) {
    indicator.classList.remove('active');
  });
  slides[currentSlide].style.display = 'block';
  indicators[currentSlide].classList.add('active');
}

updateSlide();

// Back to top button
export function initBackToTop() {
  const backToTop = document.querySelector('#toTop');

  window.addEventListener('scroll', () => {
      if (window.pageYOffset > 300) {
          backToTop.style.display = 'block';
      } else {
          backToTop.style.display = 'none';
      }
  });

  backToTop.addEventListener('click', () => {
      window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth',
      });
  });
}


const headingLeft = document.querySelector('.heading-left');
const headingRight = document.querySelector('.heading-right');

window.addEventListener('scroll', () => {
  const scrollSpeed = window.scrollY * 0.1; 
  const leftTransform = `translateX(-${scrollSpeed}px)`;
  const rightTransform = `translateX(${scrollSpeed}px)`;
  headingLeft.style.transform = leftTransform;
  headingRight.style.transform = rightTransform;
});



const buttonPrev = document.querySelector('.button-prev');
const buttonNext = document.querySelector('.button-next');

const sliderWrapper = document.querySelector('.grid-container');
const sliderItems = document.querySelectorAll('.grid-item'); 

let slideIndex = 0;

buttonNext.addEventListener('click', nextClick);
buttonPrev.addEventListener('click', prevClick);

function nextClick() {
    if (slideIndex < sliderItems.length - 1) {
        slideIndex++;
        sliderWrapper.style.transform = `translateX(-${slideIndex * 100}%)`;
      } else {
        slideIndex = 0;
        sliderWrapper.style.transform = `translateX(0%)`;
      }
  }


  function prevClick() {
    if (slideIndex === 0) {
        slideIndex = sliderItems.length - 1; 
      } else {
        slideIndex--;
    }
    sliderWrapper.style.transform = `translateX(-${slideIndex * 100}%)`;
  }
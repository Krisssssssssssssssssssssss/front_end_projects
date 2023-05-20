export function initVisitorPage() {
    const findOutMoreBtn = document.querySelector('#visitorFindOutMoreBtn')
    findOutMoreBtn.addEventListener('click', function (){
        location.hash = '#visitorListingPage';
    })

    const visitorsHomePageScrollImages = document.querySelectorAll('.visitorsHomePageScrollImages');
    visitorsHomePageScrollImages.forEach(image => image.addEventListener('click', function (){
        location.hash = '#visitorListingPage';
    }))


      slider('.slide-carousel', '.slider__btn--left', '.slider__btn--right');
}
export const slider = function (slidesToCheck, toLeft, toRight) {
  const slides = document.querySelectorAll(slidesToCheck);
  const btnLeft = document.querySelector(toLeft);
  const btnRight = document.querySelector(toRight)
  
    let curSlide = 0;
    const maxSlide = slides.length;
  
  
    const goToSlide = function (slide) {
      slides.forEach(
        (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
      );
    };
  

    const nextSlide = function () {
      if (curSlide === maxSlide - 1) {
        curSlide = 0;
      } else {
        curSlide++;
      }
  
      goToSlide(curSlide);
    };
  
    const prevSlide = function () {
      if (curSlide === 0) {
        curSlide = maxSlide - 1;
      } else {
        curSlide--;
      }
      goToSlide(curSlide);
    };
  
    const init = function () {
      goToSlide(0);
    };
    init();
  

    btnRight.addEventListener('click', nextSlide);
    btnLeft.addEventListener('click', prevSlide);
  };
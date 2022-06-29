// SLIDER : START

// Select all slides
document.querySelector('.slider-wrapper').classList.add('slider-initialized');

const slides = document.querySelectorAll(".slide");
// loop through slides and set each slides translateX property to index * 100%
slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${indx * 100}%)`;
    slide.classList.add('slide-' + indx);
});

const pagination = document.querySelector(".pagination");



// select next slide button
const nextSlide = document.querySelector(".btn-next");

// current slide counter
let curSlide = 0;
// maximum number of slides
let maxSlide = slides.length - 1;

let curr = document.querySelector('.pagination').children[curSlide];

curr.classList.toggle('is-active');


// add event listener and navigation functionality
nextSlide.addEventListener("click", function () {
    // check if current slide is the last and reset current slide
    if (curSlide === maxSlide) {
        document.querySelector('.pagination').children[curSlide].classList.toggle('is-active');
        curSlide = 0;
        document.querySelector('.pagination').children[curSlide].classList.toggle('is-active');

    } else {
        document.querySelector('.pagination').children[curSlide].classList.toggle('is-active');
        curSlide++;
        document.querySelector('.pagination').children[curSlide].classList.toggle('is-active');
    }

//   move slide by -100%
    slides.forEach((slide, indx) => {
        slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
    });
});

// select prev slide button
const prevSlide = document.querySelector(".btn-prev");

// add event listener and navigation functionality
prevSlide.addEventListener("click", function () {
    // check if current slide is the first and reset current slide to last
    if (curSlide === 0) {
        curSlide = maxSlide;
    } else {
        curSlide--;
    }

    //   move slide by 100%
    slides.forEach((slide, indx) => {
        slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
    });
});

// SLIDER : END







document.addEventListener('DOMContentLoaded', () => {

    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
  
    // Add a click event on each of them
    $navbarBurgers.forEach( el => {
      el.addEventListener('click', () => {
  
        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);
  
        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');
  
      });
    });
  
  });

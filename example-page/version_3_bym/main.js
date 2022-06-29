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



function slideNext() {
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
}
function slidePrev() {
    if (curSlide === 0) {
        curSlide = maxSlide;
    } else {
        curSlide--;
    }

    //   move slide by 100%
    slides.forEach((slide, indx) => {
        slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
    });
}

setInterval(function() {
    slideNext();
}, 5000);

// add event listener and navigation functionality
nextSlide.addEventListener("click", function () {
    slideNext();
});

// select prev slide button
const prevSlide = document.querySelector(".btn-prev");

// add event listener and navigation functionality
prevSlide.addEventListener("click", function () {
    slidePrev();
});

// SLIDER : END

// Burger Menu : START
/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginRight = "250px";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginRight = "0";
}
// Burger Menu : START
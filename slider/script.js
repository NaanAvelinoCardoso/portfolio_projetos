let totalSlides = document.querySelectorAll('.slide-item').length;
let currentSlide = 0;

document.querySelector('.slide-width').style.width = `calc(100vw * ${totalSlides})`;
document.querySelector('.slide-controls').style.height = `${document.querySelector('.slide').clientHeight}px`;

function goPrev() {
    currentSlide--;
    if (currentSlide < 0) {
        currentSlide = totalSlides - 1;
    }
    updateMargin();
}
function goNext() {
    currentSlide++;
    if (currentSlide > (totalSlides-1)) {
        currentSlide = 0;
    }

    updateMargin();
}
function updateMargin() {
    let slideItemWidth = document.querySelector('.slide-item').clientWidth;
    let newMargin = (currentSlide * slideItemWidth);
    document.querySelector('.slide-width').style.marginLeft = `-${newMargin}px`;
}

setInterval(goNext, 5000);
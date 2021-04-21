// variaveis de ambientes
let totalSlides = document.querySelectorAll('.slide-item').length;
let currentSlide = 0;

//setando o width dos slides e height do controls
document.querySelector('.slide-width').style.width = `calc(100vw * ${totalSlides})`;
document.querySelector('.slide-controls').style.height = `${document.querySelector('.slide').clientHeight}px`;

// criando as funções de passa o slide
function goPrev() {
    currentSlide--;
    if (currentSlide < 0) {
        currentSlide = totalSlides -1;
    }

    updateSlide();
}
function goNext() {
    currentSlide++;
    if (currentSlide > (totalSlides - 1)) {
        currentSlide = 0;
    }

    updateSlide();
}
// função que faz os controles funcionar
function updateSlide() {
    let slideItemWidth = document.querySelector('.slide-item').clientWidth;
    let newMargin = (currentSlide * slideItemWidth);
    document.querySelector('.slide-width').style.marginLeft = `-${newMargin}px`;
}

// criando esse intervalo de cada 5s ele ficar trocando o slide
setInterval(goNext, 5000);
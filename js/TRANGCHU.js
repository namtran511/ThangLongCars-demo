
const sliderWrapper = document.querySelector('.slider-wrapper');
const productCards = document.querySelectorAll('.product-card');
const totalCards = productCards.length / 2;
const cardsToShow = 5;
const cardWidth = productCards[0].clientWidth + 40;
let currentIndex = 0;

document.getElementById('next').addEventListener('click', () => {
    currentIndex++;
    if (currentIndex >= totalCards) {
        currentIndex = 0;
        sliderWrapper.style.transition = 'none';
        sliderWrapper.style.transform = `translateX(0)`;
        setTimeout(() => {
            sliderWrapper.style.transition = 'transform 0.5s ease';
            currentIndex++;
            updateSlider();
        }, 50);
    } else {
        updateSlider();
    }
});

document.getElementById('prev').addEventListener('click', () => {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = totalCards - 1;
        sliderWrapper.style.transition = 'none';
        sliderWrapper.style.transform = `translateX(-${(totalCards) * cardWidth}px)`;
        setTimeout(() => {
            sliderWrapper.style.transition = 'transform 0.5s ease';
            updateSlider();
        }, 50);
    } else {
        updateSlider();
    }
});

function updateSlider() {
    const offset = -currentIndex * cardWidth;
    sliderWrapper.style.transform = `translateX(${offset}px)`;
}
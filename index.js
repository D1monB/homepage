const slider = document.querySelector('.slider');
const inner = slider?.querySelector('.slider__inner');

let sliderWidth = slider.getBoundingClientRect().width;
let currentSlide = 0;

function changeSlide(e) {
    const slide = e.target;

    if (slide && slide.dataset.slide) {
        const prevSlide = slide.closest('.slider__pagination').querySelector('.active');
        prevSlide.classList.remove('active');
        slide.classList.add('active');
        currentSlide = slide.dataset.slide;
    }

    updateSliderPosition()
}

function updateSliderPosition() {
    inner.style.transform = `translateX(-${sliderWidth * currentSlide}px)`;
}

slider.addEventListener('click', changeSlide);

window.addEventListener('resize', () => {
    sliderWidth = slider.getBoundingClientRect().width;
    updateSliderPosition()
});

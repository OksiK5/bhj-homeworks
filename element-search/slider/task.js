const sliderItems = document.querySelectorAll('.slider__item');
const prevButton = document.querySelector('.slider__arrow_prev');
const nextButton = document.querySelector('.slider__arrow_next');
const dots = document.querySelectorAll('.slider__dot');

function getCurrentSlideIndex() {
	return Array.from(sliderItems).findIndex(item => item.classList.contains('slider__item_active'));
}

function setActiveSlide(index) {
	let slideIndex = getCurrentSlideIndex();
	sliderItems[slideIndex].classList.remove('slider__item_active');
	dots[slideIndex].classList.remove('slider__dot_active');
	sliderItems[index].classList.add('slider__item_active');
	dots[index].classList.add('slider__dot_active');
}

prevButton.addEventListener('click', () => {
	let newIndex = getCurrentSlideIndex() - 1;
	if (newIndex < 0) {
		newIndex = sliderItems.length - 1;
	}
	setActiveSlide(newIndex);
});

nextButton.addEventListener('click', () => {
	let newIndex = getCurrentSlideIndex() + 1;
	if (newIndex >= sliderItems.length) {
		newIndex = 0;
	}
	setActiveSlide(newIndex);
});

dots.forEach((dot, index) => {
	dot.addEventListener('click', () => {
		setActiveSlide(index);
	});
});
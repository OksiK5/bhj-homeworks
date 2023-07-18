const fontSizes = document.querySelectorAll('.font-size');

fontSizes.forEach((fontSize) => {
	fontSize.addEventListener('click', (event) => {
		event.preventDefault();

		const selectedFontSize = event.target;
		const size = selectedFontSize.dataset.size;

		const activeFontSize = document.querySelector('.font-size_active');
		activeFontSize.classList.remove('font-size_active');

		selectedFontSize.classList.add('font-size_active');

		const book = document.querySelector('.book');

		if (size === 'big') {
			book.classList.add('book_fs-big');
			book.classList.remove('book_fs-small');
		} else if (size === 'small') {
			book.classList.add('book_fs-small');
			book.classList.remove('book_fs-big');
		} else {
			book.classList.remove('book_fs-small');
			book.classList.remove('book_fs-big');
		}
	});
});

const textColorLinks = document.querySelectorAll('.text_color_black, .text_color_gray, .text_color_whitesmoke');
const bgColorLinks = document.querySelectorAll('.bg_color_black, .bg_color_gray, .bg_color_white');

function changeTextColor(e) {
	e.preventDefault();

	textColorLinks.forEach(link => link.classList.remove('color_active'));
	this.classList.add('color_active')

	const textColor = this.getAttribute('data-text-color');

	const colorParagraph = document.querySelectorAll('.book__content');
	colorParagraph.forEach(paragraph => {
		paragraph.style.color = textColor;
	});
}

function changeBgColor(e) {
	e.preventDefault();

	bgColorLinks.forEach(link => link.classList.remove('color_active'));
	this.classList.add('color_active')

	const bgColor = this.getAttribute('data-bg-color');

	const bookContainer = document.getElementById('book');
	bookContainer.style.backgroundColor = bgColor;
}

textColorLinks.forEach(link => {
	link.addEventListener('click', changeTextColor);
});

bgColorLinks.forEach(link => {
	link.addEventListener('click', changeBgColor);
});
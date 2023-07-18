function rotateText() {
	const rotators = document.querySelectorAll('.rotator');

	rotators.forEach((rotator) => {
		const rotatorCases = rotator.querySelectorAll('.rotator__case');
		const activeCase = rotator.querySelector('.rotator__case_active');

		// Находим индекс активного элемента
		const activeIndex = Array.from(rotatorCases).indexOf(activeCase);

		// Удаляем класс активного элемента
		activeCase.classList.remove('rotator__case_active');

		// Определяем следующий элемент
		const nextIndex = (activeIndex + 1) % rotatorCases.length;
		const nextCase = rotatorCases[nextIndex];

		// Получаем значение data-атрибутов
		const speed = nextCase.dataset.speed;
		const color = nextCase.dataset.color;

		// Применяем значения data-атрибутов
		nextCase.classList.add('rotator__case_active');
		nextCase.style.transitionDuration = speed + 'ms';
		nextCase.style.color = color;
	});
}

setInterval(rotateText, 1000);
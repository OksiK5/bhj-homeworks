const dropdowns = document.querySelectorAll('.dropdown');

Array.from(dropdowns).forEach(dropdown => {
	const button = dropdown.querySelector('.dropdown__value');
	const list = dropdown.querySelector('.dropdown__list');

	button.addEventListener('click', function() {
		const isActive = list.classList.contains('dropdown__list_active');

		if (isActive) {
			list.classList.remove('dropdown__list_active');
		} else {
			list.classList.add('dropdown__list_active');
		}
	});

    const items = dropdown.querySelectorAll('.dropdown__item');

	Array.from(items).forEach(item => {
        item.addEventListener('click', function(event) {
          event.preventDefault();
    
            const value = item.querySelector('.dropdown__link').textContent;
            button.textContent = value;
            list.classList.remove('dropdown__list_active');
            return false;
        });
    });
});
const hasTooltipList = document.querySelectorAll('.has-tooltip');
let currentTooltip = null;

hasTooltipList.forEach(item => {
	item.addEventListener('click', (e) => {
		e.preventDefault();

		if (currentTooltip) {
			currentTooltip.classList.remove('tooltip_active');
		}

		const tooltip = document.createElement('div');
		tooltip.classList.add('tooltip');
		tooltip.textContent = item.getAttribute('title');

		const rect = item.getBoundingClientRect();

		tooltip.style.top = rect.top + item.offsetHeight + 'px';
		tooltip.style.left = rect.left + 'px';

		item.parentNode.insertBefore(tooltip, item.nextSibling);
		tooltip.classList.add('tooltip_active');

		currentTooltip = tooltip;

		setTimeout(function() {
			tooltip.classList.remove('tooltip_active');
		}, 1000);
	});
});
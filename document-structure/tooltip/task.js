const hasTooltipList = document.querySelectorAll('.has-tooltip');
let currentTooltip = null;

const tooltip = document.createElement('div');
tooltip.classList.add('tooltip');
document.body.appendChild(tooltip);

hasTooltipList.forEach(item => {
	item.addEventListener('click', (e) => {
		e.preventDefault();

		if (currentTooltip) {
			currentTooltip.classList.remove('tooltip_active');
		}

		if (currentTooltip && currentTooltip.previousElementSibling === item) {
			currentTooltip = null;
			return;
		}

		const textTitle = item.title;
		tooltip.innerText = textTitle;

		const rect = item.getBoundingClientRect();

		tooltip.style.top = `${rect.bottom}px`;
		tooltip.style.left = `${rect.left}px`;

		currentTooltip = tooltip;
		currentTooltip.classList.add('tooltip_active');
	});
});

document.addEventListener('click', (event) => {
	const target = event.target;
	if (!target.classList.contains('has-tooltip')) {
		if (currentTooltip) {
			currentTooltip.classList.remove('tooltip_active');
			currentTooltip = null;
		}
	}
});
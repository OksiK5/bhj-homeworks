const hasTooltipList = document.querySelectorAll('.has-tooltip');
let currentTooltip = null;

const tooltip = document.createElement('div');
tooltip.classList.add('tooltip');
document.body.appendChild(tooltip);

hasTooltipList.forEach(item => {
	item.addEventListener('click', (e) => {
		e.preventDefault();

		const textTitle = item.getAttribute('title');
		const rect = item.getBoundingClientRect();

		if (tooltip.classList.contains('tooltip_active') && tooltip.innerText === textTitle) {
			tooltip.classList.remove('tooltip_active');
			currentTooltip = null;
		} else {
			tooltip.innerText = textTitle;
			tooltip.style.top = `${rect.bottom}px`;
			tooltip.style.left = `${rect.left}px`;
			tooltip.classList.add('tooltip_active');
			currentTooltip = tooltip;
		}
	});
});
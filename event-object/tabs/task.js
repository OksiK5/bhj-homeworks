const tabs = document.querySelectorAll('.tab');
const tabContents = document.querySelectorAll('.tab__content');

function switchTab(event) {
	tabs.forEach(tab => {
		tab.classList.remove('tab_active');
	});

	tabContents.forEach(content => {
		content.classList.remove('tab__content_active');
	});

	event.target.classList.add('tab_active');

	const tabIndex = Array.from(tabs).indexOf(event.target);

	tabContents[tabIndex].classList.add('tab__content_active');
}
tabs.forEach(tab => {
	tab.addEventListener('click', switchTab);
});
const counterElement = document.getElementById("clicker__counter");
const cookieElement = document.getElementById("cookie");

let clickCount = 0;
let startTime = performance.now();

function onCookieClick() {
	clickCount++;
	counterElement.textContent = clickCount;

	if (cookieElement.width === 200) {
		cookieElement.width = 150;
		cookieElement.height = 150;
	} else {
		cookieElement.width = 200;
		cookieElement.height = 200;
	}
}
cookieElement.addEventListener("click", onCookieClick);
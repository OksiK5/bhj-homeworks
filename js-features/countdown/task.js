let timerElement = document.getElementById('timer');
let countdown = parseInt(timerElement.textContent);
const updateTimer = function() { // Функция для обновления таймера каждую секунду
	countdown--; // Уменьшаем значение таймера на 1
	timerElement.textContent = countdown; // Обновляем отображение таймера

	if (countdown <= 0) {
		clearInterval(timerInterval); // Останавливаем обновление таймера
		    //Если отсчет закончился, выводим сообщение о победе
		alert('Вы победили в конкурсе!');

		const url = "https://www.ya.ru/";
		window.location.href = url;
	}
}
let timerInterval = setInterval(updateTimer, 1000); //Запуск функции обновления каждую секунду


// const updateTimer = function() {
// 	Вычисляем часы, минуты и секунды
// 	let hours = Math.floor(countdown / 3600);
// 	let minutes = Math.floor((countdown % 3600) / 60);
// 	let seconds = countdown % 60;

// 	Преобразуем числа в двузначный формат
// 	let formattedHours = hours.toString().padStart(2, '0');
// 	let formattedMinutes = minutes.toString().padStart(2, '0');
// 	let formattedSeconds = seconds.toString().padStart(2, '0');

// 	Обновляем отображение таймера
// 	timerElement.textContent = `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;

// 	Уменьшаем значение таймера на 1
// 	countdown--;

// 	if (countdown <= 0) {
// 		clearInterval(timerInterval);
// 		alert('Вы победили в конкурсе!');
// 	}
// }
// let timerInterval = setInterval(updateTimer, 1000);
const badge = document.querySelector('.chat-widget');
const chat = document.querySelector('.chat-widget__messages');

// Открываем окно чата при нажатии на боковой бэйдж
badge.addEventListener('click', () => {
	badge.classList.add('chat-widget_active');
});

// Получаем текущую дату
function getCurrentTime() {
	const now = new Date();
	const hours = now.getHours().toString().padStart(2, '0');
	const minutes = now.getMinutes().toString().padStart(2, '0');
	return `${hours}:${minutes}`;
}
// Отправка сообщения по нажатию Enter
document.addEventListener('keydown', (event) => {
	if (event.key === 'Enter') {
		const input = document.querySelector('input');
		const message = input.value.trim();

		if (message !== '') {
			const messageTime = getCurrentTime();
			const clientMessage = `
                <div class="message message_client">
                    <div class="message__time">${messageTime}</div>
                    <div class="message__text">${message}</div>
                </div>`;

			chat.innerHTML += clientMessage;
			input.value = '';

			const robotMessage = `
                <div class="message">
                    <div class="message__time">${getCurrentTime()}</div>
                    <div class="message__text">${getRobotAnswer()}</div>
                </div>`;

			chat.innerHTML += robotMessage;
		}
	}
	// Генерация случайного ответа робота
	function getRobotAnswer() {
		const robotAnswers = [
			'Добрый день, мы ещё не проснулись. Позвоните через 10 лет',
			'Где ваша совесть?',
			'Добрый день! До свидания!',
			'Мы ничего не будем вам продавать!',
			'Кто тут?',
			'К сожалению, все операторы сейчас заняты. Не пишите нам больше',
			'Вы не купили ни одного товара для того, чтобы так с нами разговаривать!',
		];
		const randomIndex = Math.floor(Math.random() * robotAnswers.length);
		return robotAnswers[randomIndex];
	}
});
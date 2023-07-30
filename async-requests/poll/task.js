const pollTitle = document.getElementById('poll__title');
const pollAnswers = document.getElementById('poll__answers');
const url = 'https://students.netoservices.ru/nestjs-backend/poll';

const xhr = new XMLHttpRequest();
xhr.open('GET', url, true);
xhr.send();

xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState === xhr.DONE && xhr.status === 200) {
        const jsonXhr = JSON.parse(xhr.responseText);
        const answers = jsonXhr.data.answers;

        pollTitle.textContent = jsonXhr.data.title;

        answers.forEach(element => {
            pollAnswers.innerHTML += `
                <button class="poll__answer">
                    ${element}
                </button>`;
        });
    }
}) 
pollAnswers.addEventListener('click', () => {
    alert('Спасибо, ваш голос засчитан!')
});
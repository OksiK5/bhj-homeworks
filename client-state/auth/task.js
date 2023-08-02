const signinForm = document.getElementById('signin__form');
const welcome = document.getElementById('welcome');
const userId = document.getElementById('user_id');
const signin = document.getElementById('signin');

if (localStorage.getItem('user_id')) {
    welcome.classList.add('welcome_active');
    userId.textContent = localStorage.getItem('user_id');
    signin.style.display = 'none';
} else {
    signin.classList.add('signin_active');
}

signinForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(signinForm);

    if (!signinForm.login.value || !signinForm.password.value) {
        alert('Логин/пароль не может быть пустым');
        return;
    }

    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth');
    xhr.addEventListener('readystatechange', () => {
        if (xhr.readyState == xhr.DONE) {
            const response = JSON.parse(xhr.responseText);
            if (response.success) {
                localStorage.setItem('user_id', response.user_id);
                signin.style.display = 'none';
                userId.textContent = response.user_id;
                welcome.classList.add('welcome_active');
            } else {
                alert('Неверный логин/пароль');
                signinForm.reset();
            }
        }
    });
    xhr.send(formData);
});

const logoutBtn = document.getElementById('logout__btn');
logoutBtn.addEventListener('click', () => {
    localStorage.removeItem('user_id');
    welcome.classList.remove('welcome_active');
    signin.style.display = 'block';
    signinForm.reset();
});
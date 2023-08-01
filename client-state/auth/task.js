const signinForm = document.getElementById('signin__form');
const welcome = document.getElementById('welcome');

signinForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(signinForm);

    if (!signinForm.login.value) {
        alert('Логин не может быть пустым');
        return;
    };
    if (!signinForm.password.value) {
        alert('Пароль не может быть пустым');
        return;
    }; 

    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth');
    xhr.addEventListener('readystatechange', () => {
        if (xhr.readyState == xhr.DONE) {
            const response = JSON.parse(xhr.responseText);
            if (response.success) {
                localStorage.setItem('user_id', response.user_id);
                document.getElementById('signin').classList.remove('signin_active');
                document.getElementById('user_id').textContent = response.user_id;
                welcome.classList.add('welcome_active');
            } else {
                alert('Неверный логин/пароль');
            }
        }
    });
    xhr.send(formData);
});

const logoutBtn = document.getElementById('logout__btn');

logoutBtn.addEventListener('click', () => {
    localStorage.removeItem('user_id');
    welcome.classList.remove('welcome_active');
    document.getElementById('signin').classList.add('signin_active');
    document.getElementById('signin__form').reset();
});
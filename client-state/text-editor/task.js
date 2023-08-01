const editor = document.getElementById('editor');

// При изменении содержимого редактора сохраняем значение в локальное хранилище
editor.addEventListener('input', () => {
    localStorage.setItem('editorValue', editor.value);
});

// При загрузке страницы восстанавливаем значение редактора из локального хранилища
window.addEventListener('load', () => {
    const savedValue = localStorage.getItem('editorValue');
    if (savedValue) {
    editor.value = savedValue;
    }
});

//очищаем поле ввода
document.getElementById('clearBtn').addEventListener('click', () => {
    editor.value = '';
});
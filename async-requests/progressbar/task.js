const progress = document.getElementById('progress');
const xhr = new XMLHttpRequest();
    
document.forms.form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(document.forms.form);
    
    xhr.upload.addEventListener('progress', (e) => {
        progress.value = e.loaded / e.total;
    });

    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload', true);
    xhr.send(formData);
});
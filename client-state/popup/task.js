const modal = document.getElementById('subscribe-modal');
const closeBtn = document.querySelector('.modal__close');

document.addEventListener('DOMContentLoaded', () => {
  if (document.cookie === '') {
    modal.classList.add('modal_active');
  }
});

closeBtn.addEventListener('click', () => {
  modal.classList.remove('modal_active');
  let date = new Date();
  date.setDate(date.getDate() + 1);
  document.cookie = 'modalClosed=true; expires=' + date.toUTCString();
});
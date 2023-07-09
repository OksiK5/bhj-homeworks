const modalMain = document.getElementById('modal_main');
const modalSuccess = document.getElementById('modal_success');
const modalCloseButtons = document.getElementsByClassName('modal__close');
const showSuccessBtn = document.querySelector('.show-success');

modalMain.classList.add('modal_active');

Array.from(modalCloseButtons).forEach(button => {
  button.onclick = function() {
    this.closest('.modal').classList.remove('modal_active');
  }
});

showSuccessBtn.onclick = function() {
  modalMain.classList.remove('modal_active');
  modalSuccess.classList.add('modal_active');
}
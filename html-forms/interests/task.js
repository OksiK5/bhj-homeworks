const checkboxes = document.querySelectorAll('.interest__check');

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener('click', () => {
    // Получаем родительский элемент списка
    const parent = checkbox.closest('.interest');
    
    // Получаем вложенный список, если он есть
    const nestedList = parent.querySelector('.interests_active');
    
    // Если есть вложенный список, то проставляем/снимаем галочки
    if (nestedList) {
      const nestedCheckboxes = nestedList.querySelectorAll('.interest__check');
      nestedCheckboxes.forEach((nestedCheckbox) => {
        nestedCheckbox.checked = checkbox.checked;
      });
    }
  });
});
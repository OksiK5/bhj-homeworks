const addBtn = document.querySelector('.tasks__add');

addBtn.addEventListener('click', (e) => {
	e.preventDefault();
    const taskInput = document.querySelector('.tasks__input');
	const taskText = taskInput.value.trim();

	if (taskText !== '') {
		const taskElement = document.createElement('div');
		taskElement.classList.add('task');
		taskElement.innerHTML = `
            <div class="task__title">${taskText}</div> 
            <a href="#" class="task__remove">&times;</a>`;
        const taskList = document.querySelector('.tasks__list');    
		taskList.appendChild(taskElement);

		const removeBtn = taskElement.querySelector('.task__remove');
		removeBtn.addEventListener('click', removeTask);

		taskInput.value = '';
	}
});

function removeTask(event) {
	const taskElement = event.target.closest('.task');
	taskElement.remove();
}
const todoList = [
    { name: 'make dinner',
    dueDate: '22-10-2026'},
    { name: 'wash dishes',
    dueDate: '22-10-2026'}
    ]; 

renderTodoList();

function renderTodoList() {
  let todoListHTML = '';

  todoList.forEach((todoObject, index) => {
    const { name, dueDate } = todoObject;
    const html = `
      <div>${name}</div>
      <div>${dueDate}</div>
      <button 
      class="delete-todo-button js-delete-todo-btn"
      >Delete</button> 
    `;
    todoListHTML += html;

  })

  document.querySelector('.js-todolist')
    .innerHTML = todoListHTML;

  document.querySelectorAll('.js-delete-todo-btn')
    .forEach((deleteBtn, index) => {
        deleteBtn.addEventListener('click', () => {
            todoList.splice(index, 1);
            renderTodoList();
        }); // delete the button that we want
    });
};

document.querySelector('.js-add-todo-btn')
    .addEventListener('click', () => {
        addTodo();
}); // make the add button work w/o the onclick

function addTodo() {
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;

  const dateInputElement = document.querySelector('.js-due-date-input');
  const dueDate = dateInputElement.value;

  todoList.push({
    name,
    dueDate
  });

  inputElement.value = '';

  renderTodoList();
}
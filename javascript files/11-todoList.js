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
      <button class="delete-todo-button js-delete-todo-button">Delete</button> 
    `;
    todoListHTML += html;
  });

//  loop - accumulator pattern
//     for (let i = 0; i < todoList.length; i++) {
//         const todoObject = todoList[i];
//         const { name, dueDate } = todoObject;
//         const html = `
//             <div>${name}</div>
//             <div>${dueDate}</div>
//             <button
//                 onclick="todoList.splice(${index}, 1);
//                 renderTodoList()
//             " class="delete-todo-button">Delete</button> 
//         `;
//         todoListHTML += html; // generating the html
//     }

//     document.querySelector('.js-todolist').innerHTML = todoListHTML;

}

function addTodo() {
    const inputEl = document.querySelector('.js-name-input');
    const name = inputEl.value; // save todo values into a variable

    const dateInputEl = document.querySelector('.js-due-date-input');
    const dueDate = dateInputEl.value;
    
    todoList.push({
        name, // == name: name
        dueDate // == dueDate: dueDate 
    }); // push the todo input values into the array

    inputEl.value = ''; // reset the text on the textbox (empty) when click on add

    renderTodoList();
}
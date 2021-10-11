const addTodo = document.querySelector('.add');
const todoList = document.querySelector('.todos');
const search = document.querySelector('.search input');


//task template
const createTodo = todo => {
    const newTodo =
    `
        <li class="list-group-item d-flex justify-content-between align-items-center">
            <span>${todo}</span>
            <i class="far fa-trash-alt delete"></i>
        </li>
    `;
    todoList.innerHTML += newTodo;
};


//to create new tasks
addTodo.addEventListener('submit', e => {
    e.preventDefault();

    const todo = addTodo.add.value;
    createTodo(todo);

});

//to delete tasks
todoList.addEventListener('click', e => {
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    }
});

const match = (todo, query) =>
    todo.trim().toLowerCase().includes(query.toLowerCase())

const filterTodos = e => {
    if (!e || e.length === 0) {
      Array.from(todoList.children)
      .forEach((todo) => todo.classList.remove('filtered'));
      return;
    }

    Array.from(todoList.children)
    .filter((todo) =>!match(todo.textContent, e))
    .forEach((todo) => todo.classList.add('filtered'));
  
    Array.from(todoList.children)
    .filter((todo) => match(todo.textContent, e))
    .forEach((todo) => todo.classList.remove('filtered'));
};

//for live searching and filtering
search.addEventListener('keyup', () => {
    const key = search.value.trim();
    filterTodos(key);
});

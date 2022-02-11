interface Todo {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}

export interface TodoResponse {
    todos: Todo[]
}

interface renderTodosBlock {
    (data: [Todo]): void
}

export const renderTodosBlock = (todos) => {
  const element = document.getElementById('todos');

  element.innerHTML += '<h1>Todos</h1';
  todos.forEach((el) => {
    element.innerHTML += `
    <div class='todo-item'>
    <h3>ID ${el.id}</h3>
    ${el.title}
    </div
    `;
  });
}

export const fetchTodos = () => {
  return fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
    .then((response) => response.json())
    .then<TodoResponse>(json => json); // Только для "посмотреть" типизированный then )
}
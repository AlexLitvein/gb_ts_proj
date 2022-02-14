interface Todo {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}

interface GetTodosByCount {
  (count: number): Promise<Todo[]>
}

interface RenderTodosBlock {
    (todos: Todo[]): void
}

export const renderTodosBlock:RenderTodosBlock = (todos) => {
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

export const getTodosByCount:GetTodosByCount = (count) => {
  return fetch(`https://jsonplaceholder.typicode.com/todos?_limit=${count}`)
    .then(response => response.json());
}
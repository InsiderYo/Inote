import { TodoItemType } from '../store/reducers/todos/types';
import { IResponse } from '../types';

export const postTodo = (newTodo: TodoItemType) => {
  return new Promise<IResponse<TodoItemType>>((resolve) => {
    const todosRaw = localStorage.getItem('todos');
    let todos = [];
    if (todosRaw) {
      todos = JSON.parse(todosRaw);
    }
    localStorage.setItem('todos', JSON.stringify([...todos, newTodo]));

    setTimeout(() => {
      resolve({ status: 204, data: newTodo });
    }, 500);
  });
};

export const getAllTodos = () => {
  return new Promise<IResponse<TodoItemType[]>>((resolve) => {
    const todosRaw = localStorage.getItem('todos');
    let todos: TodoItemType[] = [];
    if (todosRaw) {
      todos = JSON.parse(todosRaw);
    }
    setTimeout(() => {
      resolve({ status: 200, data: todos });
    }, 500);
  });
};

export const putRemoveTodoToTrash = (todoId: string) => {
  return new Promise<IResponse<TodoItemType>>((resolve, reject) => {
    const todosRaw = localStorage.getItem('todos');
    let todos: TodoItemType[] = [];
    if (todosRaw) {
      todos = JSON.parse(todosRaw);
    }
    const currentTodo = todos.find((todo) => todo.id === todoId);
    if (currentTodo) {
      localStorage.setItem(
        'todos',
        JSON.stringify([
          ...todos.filter((todo) => todo.id !== todoId),
          { ...currentTodo, isDelete: true },
        ])
      );
    }
    setTimeout(() => {
      if (currentTodo) {
        console.log('result');
        resolve({ status: 200, data: currentTodo });
      } else {
        reject({ status: 404 });
      }
    }, 500);
  });
};

export const putChangeIsDone = (todoId: string) => {
  return new Promise<IResponse<TodoItemType>>((resolve, reject) => {
    const todosRaw = localStorage.getItem('todos');
    let todos: TodoItemType[] = [];
    if (todosRaw) {
      todos = JSON.parse(todosRaw);
    }
    const currentTodo = todos.find((todo) => todo.id === todoId);
    if (currentTodo) {
      localStorage.setItem(
        'todos',
        JSON.stringify(
          todos.map((todo) =>
            todo.id === currentTodo.id
              ? { ...currentTodo, isDone: !currentTodo.isDone }
              : todo
          )
        )
      );
    }
    setTimeout(() => {
      if (currentTodo) {
        console.log('result');
        resolve({
          status: 200,
          data: { ...currentTodo, isDone: !currentTodo.isDone },
        });
      } else {
        reject({ status: 404 });
      }
    }, 500);
  });
};

export const deletePermanently = (todoId: string) => {
  return new Promise<IResponse<string>>((resolve, reject) => {
    const todosRaw = localStorage.getItem('todos');
    let todos: TodoItemType[] = [];
    if (todosRaw) {
      todos = JSON.parse(todosRaw);
    }

    localStorage.setItem(
      'todos',
      JSON.stringify(todos.filter((todo) => todo.id !== todoId))
    );

    setTimeout(() => {
      resolve({
        status: 200,
        data: todoId,
      });
    }, 500);
  });
};

export const editTodo = (newTodo: TodoItemType) => {
  return new Promise<IResponse<TodoItemType>>((resolve) => {
    const todosRaw = localStorage.getItem('todos');
    let todos: TodoItemType[] = [];
    if (todosRaw) {
      todos = JSON.parse(todosRaw);
    }
    localStorage.setItem(
      'todos',
      JSON.stringify(
        todos.map((todo) => (todo.id === newTodo.id ? newTodo : todo))
      )
    );

    setTimeout(() => {
      resolve({ status: 200, data: newTodo });
    }, 500);
  });
};

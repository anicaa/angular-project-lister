import { Injectable } from '@angular/core';
import { Todo } from './todo.model';

@Injectable({ providedIn: 'root' })
export class TodoService {
  // private todos: Todo[];

  private todos = [
    new Todo('Todo 1', 'This is todo 1.', false, 'high', new Date()),
    new Todo('Todo 2', 'This is todo 2.', false, 'low', new Date()),
    new Todo('Todo 3', 'This is todo 3.', false, 'high', new Date()),
    new Todo('Todo 4', 'This is todo 4.', false, 'medium', new Date()),
    new Todo('Todo 5', 'This is todo 5.', false, 'high', new Date())
  ];

  getTodos() {
    return this.todos.slice();
  }

  getTodo(index: number) {
    return this.todos[index];
  }
}

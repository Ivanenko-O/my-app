import {Component} from '@angular/core';

class Todo {
  constructor(public title: string, public completed: boolean = false) {  }
}

const todos: Todo[] = [
  {
    title: 'изучитть JS',
    completed: false
  },
  {
    title: 'изучитть nG2',
    completed: false
  },
  {
    title: 'написать SPA',
    completed: false
  },
];

@Component({
  moduleId: module.id,
  selector: 'app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})

export class AppComponent {
  title: string = 'Angular 2Do';
  todos: Todo[] = todos; // свойство класса;

  create(event: Event, title) {
    let todo: Todo = new Todo(title);
    this.todos.push(todo);
  }

  toggle(todo) {
    todo.completed = !todo.completed;
  }

  delete(todo) {
    let index = this.todos.indexOf(todo);

    if (index > -1) {
      this.todos.splice(index, 1);
    }
  }
}



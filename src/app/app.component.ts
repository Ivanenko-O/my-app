import {Component} from '@angular/core';

const todos = [
  {
    title: 'изучитть JS',
    completed: true
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
  title = 'Angular 2Do';
  todos = todos; // свойство класса;

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



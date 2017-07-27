import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-todo-form',
  templateUrl: 'todo-form.component.html',
  styleUrls: ['todo-form.component.css']
})

export class TodoFormComponent {
  newTodoTitle: string = ''; // class property;

  create() {

  }
}

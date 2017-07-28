import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../shared/todo';
// указываем, что компонент принимает свойство при помощи декоратора Input

@Component({
  moduleId: module.id,
  selector: 'todo-item',
  templateUrl: 'todo-item.component.html',
  styleUrls: ['todo-item.component.css']
})

export class TodoItemComponent {
  @Input() todo: Todo =  new Todo('newValue');
  @Output() delete = new EventEmitter(); // class EventEmitter предназначен для создания объектов, кот. генерируют события
  // в свойстве delete  хранится не функция,а  объект, генерируюзий события

  toggle() {
    this.todo.completed = !this.todo.completed;
  }

  onDelete() {
    this.delete.emit(this.todo);
  }
}

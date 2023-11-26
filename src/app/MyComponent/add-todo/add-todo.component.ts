import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-add-todo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-todo.component.html',
  styleUrl: './add-todo.component.css'
})
export class AddTodoComponent {
  title: string = '';
  desc: string = '';
  titleTouched: boolean = false;
  descTouched: boolean = false;
  @Output() todoAdd: EventEmitter<Todo> = new EventEmitter();

  constructor() {
    }

  onSubmit() {
    const todo = {
      sno: 8,
      title: this.title,
      desc: this.desc,
      active: true
    }
    this.titleTouched = true;
    this.descTouched = true;
    if (this.title.trim() !== '' && this.desc.trim() !== '') {
      console.log('Form submitted!');
      this.todoAdd.emit(todo);
    }
  }
}

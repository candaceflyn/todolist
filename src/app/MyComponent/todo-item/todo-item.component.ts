import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})
export class TodoItemComponent implements OnInit {
  @Input() todo!: Todo;
  @Input() i!: Todo;

  @Output() todoDelete: EventEmitter<Todo> =new EventEmitter();
  @Output() todoCheckBox: EventEmitter<Todo> =new EventEmitter();

  constructor(){

  }
  ngOnInit(): void {
  }
  onClick(todo:Todo){
    this.todoDelete.emit(todo);
    console.log("onClick has been triggered")
  }
  onCheckBoxClick(todo:Todo){
   this.todoCheckBox.emit(todo);
  }
}

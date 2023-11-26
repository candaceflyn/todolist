import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Todo } from '../../Todo';
import { TodoItemComponent } from "../todo-item/todo-item.component";
import { AddTodoComponent } from "../add-todo/add-todo.component";

@Component({
    selector: 'app-todos',
    standalone: true,
    templateUrl: './todos.component.html',
    styleUrl: './todos.component.css',
    imports: [CommonModule, TodoItemComponent, AddTodoComponent]
})
export class TodosComponent implements OnInit{
  localItem: string | null | undefined;
 
  todos: Todo[];
    i: Todo = new Todo;
    title = '';

  constructor() {
    this.todos = this.loadTodosFromLocalStorage();
}

private loadTodosFromLocalStorage(): Todo[] {
    try {
        // Attempt to access localStorage
        if (typeof localStorage !== 'undefined') {
            const localItem = localStorage.getItem("todos");
            if (localItem !== null) {
                return JSON.parse(localItem);
            }
        }
    } catch (error) {
        console.error("Error accessing localStorage:", error);
    }

    return [];

}


   ngOnInit(): void {
       
   }
   deleteTodo(todo:Todo){
    console.log(todo);
    const index =this.todos.indexOf(todo);
    this.todos.splice(index,1);

    localStorage.setItem("todos",JSON.stringify(this.todos));
   }
   addTodo(todo:Todo){
    console.log(todo);
    const index =this.todos.indexOf(todo);
    this.todos.push(todo);

    localStorage.setItem("todos",JSON.stringify(this.todos));

   }
   toggleTodo(todo:Todo){
    console.log(todo);
    const index =this.todos.indexOf(todo);
    this.todos[index].active=!this.todos[index].active;

    localStorage.setItem("todos",JSON.stringify(this.todos));

   }
}

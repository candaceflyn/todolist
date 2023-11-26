import { Component,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TodosComponent } from "./MyComponent/todos/todos.component";
import { ReactiveFormsModule } from '@angular/forms';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, TodosComponent, ReactiveFormsModule]
})

export class AppComponent implements OnInit {
  constructor(){
    // setTimeout(() => {
    //   this.title="Hello user"
    // },2000);
  }
  ngOnInit() {
   
  }

  
}
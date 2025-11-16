import { Component, inject, OnInit, signal } from '@angular/core';
import { TodoType } from '../todomodel/todotype';
import { TodoService } from '../todo-service';

@Component({
  selector: 'app-todo',
  imports: [],
  templateUrl: './todo.html',
  styleUrl: './todo.scss',
})
export class Todo implements OnInit{
  todosArray=inject(TodoService);
  todoItem=signal<Array<Todo>>([]);
  ngOnInit(): void {
      this.todoItem.set(this.todosArray.todoItem)
      
  }

}

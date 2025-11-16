import { Injectable } from '@angular/core';
import { TodoType } from './todomodel/todotype';


@Injectable({
  providedIn: 'root',
})
export class TodoService {
  Todos:Array<TodoType>=[{
    title:"go to gym",
    completed:true
  },{
     title:"diary",
    completed:true
  },{
     title:"clean house",
    completed:true
  }]
}

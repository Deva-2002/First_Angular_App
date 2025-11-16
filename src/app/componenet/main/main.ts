import { Component } from '@angular/core';
import { Counter } from "../../component/counter/counter";

@Component({
  selector: 'app-main',
  imports: [Counter],
  templateUrl: './main.html',
  styleUrl: './main.scss',
})
export class Main {
  keyFuction(event: KeyboardEvent){
    console.log(`the key pressed is ${event.key} key`)
  }
}

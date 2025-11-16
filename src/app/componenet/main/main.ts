import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  imports: [],
  templateUrl: './main.html',
  styleUrl: './main.scss',
})
export class Main {
  keyFuction(event: KeyboardEvent){
    console.log(`the key pressed is ${event.key} key`)
  }
}

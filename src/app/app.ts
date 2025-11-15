import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: `
    <h1>Welcome to :{{ title() }}!</h1>
  <p>Just saying random things</p>
    <router-outlet />
  `,
  styles: [`
    p{
     background-color:red
    }
    `],
})

export class App {
  title = signal('first_app');
}

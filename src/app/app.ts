import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Header } from "./componenet/header/header";
import { Main } from "./componenet/main/main";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Main,RouterLink],
  template: `
    <h1>Welcome to :{{ title() }}!</h1>
  <p>Just saying random things</p>
  <p routerLink="/todo">Todo</p>
  <app-header [about]=aboutMessage()/>
  <app-main/>
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
  aboutMessage=signal('AboutApp')
}

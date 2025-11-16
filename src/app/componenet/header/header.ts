import { Component, input, signal } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  title=signal('hello guyz')
  home ="HomeApp"
  about=input("RandomAbout")
}

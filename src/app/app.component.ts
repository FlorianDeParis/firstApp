import { Component } from '@angular/core';

@Component({
  selector: 'firstapp-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  constructor() {
    setInterval(() => {
      this.title += '*';
    }, 1000)
  }
  title = 'firstapp';
}

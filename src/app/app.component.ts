import { Component } from '@angular/core';
import { TravelListComponent } from './travel/travel-list/travel-list.component';

@Component({
  selector: 'firstapp-root',
  imports: [TravelListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  // constructor() {
  //   setInterval(() => {
  //     this.title += '*';
  //   }, 1000)
  // }
  title = 'firstapp';
}

import { Component } from '@angular/core';
import { TravelListComponent } from './travel/travel-list/travel-list.component';
import { ControlsModule } from './controls/controls.module';

@Component({
  selector: 'firstapp-root',
  imports: [TravelListComponent,ControlsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  nombre = 10;
  title = 'firstapp';
}

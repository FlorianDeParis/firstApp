import { TimeCounterDirective } from './controls/time-counter.directive';
import { Component, ViewChild } from '@angular/core';
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
  resetCumul() {
    this.timeCounterDirective.reset();
  }

  // ViewChild recherche l'élément avec la référence tc dans le template
  // disponible après le premier rendu  (pas dans ngOnInit)
  @ViewChild("tc")
  timeCounterDirective!: TimeCounterDirective;
}

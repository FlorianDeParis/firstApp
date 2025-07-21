import { TravelListComponent } from '../travel-list/travel-list.component';
import { Travel } from './../../../models/travel';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'firstapp-travel-list-item',
  imports: [],
  templateUrl: './travel-list-item.component.html',
  styleUrl: './travel-list-item.component.scss'
})
export class TravelListItemComponent {
  constructor(private parent: TravelListComponent) {
  }


  @Input()
  travel!: Travel;
}

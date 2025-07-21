import { CurrencyPipe, DecimalPipe, JsonPipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { TravelListComponent } from '../travel-list/travel-list.component';
import { Travel } from './../../../models/travel';
import { Component, Input } from '@angular/core';
import { TravelWithMarge } from '../../../models/travel/travel';

@Component({
  selector: 'firstapp-travel-list-item',
  imports: [UpperCasePipe, TitleCasePipe, DecimalPipe, JsonPipe],
  templateUrl: './travel-list-item.component.html',
  styleUrl: './travel-list-item.component.scss'
})
export class TravelListItemComponent {
  constructor(private parent: TravelListComponent) {}

  @Input()
  travel!: TravelWithMarge;
}

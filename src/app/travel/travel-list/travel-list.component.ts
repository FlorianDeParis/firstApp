import { Component } from '@angular/core';
import { Travel } from '../../../models/travel';

@Component({
  selector: 'firstapp-travel-list',
  imports: [],
  templateUrl: './travel-list.component.html',
  styleUrl: './travel-list.component.scss'
})
export class TravelListComponent {
  travels:Travel[] = [
    {
      label:"Montreux",
      prix: 1000,
      allIncluded: true
    },
    {
      label:"Rome",
      prix: 500,
      allIncluded: false
    },
  ];

}

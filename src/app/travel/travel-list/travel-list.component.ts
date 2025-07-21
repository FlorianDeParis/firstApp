import { Component } from '@angular/core';
import { Travel } from '../../../models/travel';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'firstapp-travel-list',
  imports: [CommonModule],
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

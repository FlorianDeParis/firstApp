import { Component } from '@angular/core';
import { Travel } from '../../../models/travel';
import { CommonModule } from '@angular/common';
import { TravelListItemComponent } from "../travel-list-item/travel-list-item.component";

@Component({
  selector: 'firstapp-travel-list',
  imports: [CommonModule, TravelListItemComponent],
  templateUrl: './travel-list.component.html',
  styleUrl: './travel-list.component.scss'
})
export class TravelListComponent {
  travels:Travel[] = [
    {
      label:"Montreux, un lundi matin sous un ciel brummeux",
      prix: 1000,
      allIncluded: true
    },
    {
      label:"Rome",
      prix: 500,
      allIncluded: false
    },
  ];

  travelsAvecMarge=this.travels.map(t=>({
    ...t,
    prixAvecMarge:t.prix*1.2,
    style: this.getStyle(t)
  }));

  prixAvecMarge(p:number): number{
    return p*1.2;
  }

  getStyle(t:Travel){
    return ({
      "background-color": t.allIncluded ? '#f2f2f2': 'white'
    })
  }

  getClasses(t:Travel){
    return ({
      "travel-entry": true,
      "allIncluded": t.allIncluded
    });
  }
}

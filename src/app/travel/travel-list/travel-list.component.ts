import { Component, inject } from '@angular/core';
import { Travel } from '../../../models/travel';
import { CommonModule } from '@angular/common';
import { TravelListItemComponent } from "../travel-list-item/travel-list-item.component";
import { DataService } from '../../../services/data-service';

@Component({
  selector: 'firstapp-travel-list',
  imports: [CommonModule, TravelListItemComponent],
  templateUrl: './travel-list.component.html',
  styleUrl: './travel-list.component.scss'
})
export class TravelListComponent {

  dataService = inject(DataService);
  travels = this.dataService.getTravelAsync("");

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

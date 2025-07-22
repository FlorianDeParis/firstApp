import { Component, inject, OnInit } from '@angular/core';
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
export class TravelListComponent{

  dataService = inject(DataService);

  // Methode cycle de vie du component
  // Exécutée automatiquement par Angular une seule fois
  async ngOnInit() {
    this.travels = await this.dataService.getTravelsAsync("");
  }

  travels?: Travel[];

  // travelsAvecMarge=this.travels.map(t=>({
  //   ...t,
  //   prixAvecMarge:t.prix*1.2,
  //   style: this.getStyle(t)
  // }));

  // prixAvecMarge(p:number): number{
  //   return p*1.2;
  // }

  // getStyle(t:Travel){
  //   return ({
  //     "background-color": t.allIncluded ? '#f2f2f2': 'white'
  //   })
  // }

  // getClasses(t:Travel){
  //   return ({
  //     "travel-entry": true,
  //     "allIncluded": t.allIncluded
  //   });
  // }
}

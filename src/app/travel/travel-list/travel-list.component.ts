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
export class TravelListComponent implements OnInit{

  // Implementer OnInit garantit de ne pas faire d'erreur sur la méthode ngOnInit
  // Obtention de la liste des Travels
  // Normalement: Appel à une méthode de service

  dataService = inject(DataService);

  // Methode cycle de vie du component
  // Exécutée automatiquement par Angular une seule fois
  async ngOnInit() {
    this.travels = await this.dataService.getTravelsAsync("");
  }

  travels?: Travel[];
}

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
  // Avec Async/Await
  async ngOnInit() {
    // Gestion de la promesse explicite avec détection des changements
    // this.travels = await this.dataService.getTravelsAsync("");

    // Pas d'attente -> je compte sur le pipe async pour attendre et mettre à jour l'UI
    // qui dépend du résultat de la promesse
    // pas besoin de la détection des changements => le pipe s'en charge
    this.$travels = this.dataService.getTravelsAsync("");
  }

  //Avec Callback

  ngOnInit2() {

    this.dataService.getTravelsAsync("").then( r => {
      this.travels = r;
    });
  }

  travels?: Travel[];
  $travels?: Promise<Travel[]>
}

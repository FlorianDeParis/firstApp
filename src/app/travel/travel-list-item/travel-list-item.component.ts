import { CommonModule } from '@angular/common';
import { TravelListComponent } from '../travel-list/travel-list.component';
import { Travel } from './../../../models/travel';
import { Component, InjectionToken, Input, inject } from '@angular/core';
import { EllipsisPipe } from '../../pipes/ellipsis.pipe';
import { RouterLink } from '@angular/router';


// // Dépendance: une fonction qui prend un id de type string et qui renvoie un lien de type string
export const TravelItemLinkUrl = new InjectionToken<(id:string)=>string>("TravelItemLinkUrl");
export const TravelEditItemLinkUrl = new InjectionToken<(id:string)=>string>("TravelEditItemLinkUrl");


@Component({
  selector: 'firstapp-travel-list-item',
  imports: [CommonModule, EllipsisPipe, RouterLink],
  templateUrl: './travel-list-item.component.html',
  styleUrl: './travel-list-item.component.scss'
})
export class TravelListItemComponent {
  constructor(private parent: TravelListComponent) {
  }

  linkFunction = inject(TravelItemLinkUrl);
  editFunction = inject(TravelEditItemLinkUrl);
  @Input()
  travel!: Travel;
}

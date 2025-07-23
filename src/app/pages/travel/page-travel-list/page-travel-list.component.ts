import { Component } from '@angular/core';
import { TravelListComponent } from '../../../travel/travel-list/travel-list.component';
import { TravelItemLinkUrl } from '../../../travel/travel-list-item/travel-list-item.component';

@Component({
  selector: 'firstapp-page-travel-list',
  imports: [TravelListComponent],
  providers:[
    { provide: TravelItemLinkUrl, useValue:(id:string)=>"/travel/details/"+id}
  ],
  templateUrl: './page-travel-list.component.html',
  styleUrl: './page-travel-list.component.scss'
})
export class PageTravelListComponent {

}

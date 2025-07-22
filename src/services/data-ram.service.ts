import { Injectable } from '@angular/core';
import { DataService } from './data-service';
import { Travel } from '../models/travel';

@Injectable({
  providedIn: 'root'
})
export class DataRamService extends DataService {

  data = [
    {label:"Montreux, un lundi matin sous un ciel brummeux",prix: 1000,allIncluded: true},
    {label:"Montreux, by night",prix: 2500,allIncluded: false},
    {label:"Rome",prix: 500,allIncluded: false},
  ];

  // Methode async qui renvoit les données
  override getTravelsAsync(search: string=""): Promise<Travel[]> {
    return Promise.resolve(
      this.data.filter(c => c.label.indexOf(search) > -1)
    );
  }
  override getTravelAsync(id: string): Promise<Travel> {
    throw new Error('Method not implemented.');
  }
  override createTravelAsync(t: Travel): Promise<string> {
    throw new Error('Method not implemented.');
  }

  constructor() {
    super();
  }
}

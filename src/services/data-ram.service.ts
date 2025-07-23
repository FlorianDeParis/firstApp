import { Injectable } from '@angular/core';
import { DataService } from './data-service';
import { Travel } from '../models/travel';

@Injectable({
  providedIn: 'root'
})
export class DataRamService extends DataService {

  data = [
    {id:"1",label:"Montreux, un lundi matin sous un ciel brummeux",prix: 1000,allIncluded: true},
    {id:"2",label:"Montreux, by night",prix: 2500,allIncluded: false},
    {id:"3",label:"Rome",prix: 500,allIncluded: false},
  ];

  // Methode async qui renvoit les données
  override getTravelsAsync(search: string=""): Promise<Travel[]> {
    return Promise.resolve(
      this.data.filter(c => c.label.indexOf(search) > -1)
    );
  }
  override getTravelAsync(id: string): Promise<Travel> {
    let t = this.data.find( c => c.id == id);
    if(!t){
      return Promise.reject(new Error('Non trouvé'))
    } else {
      return Promise.resolve(t)
    }
  }

  override async updateTravelAsync(id:string,t:Travel): Promise<Travel> {
    let travel = await this.getTravelAsync(id);
    Object.assign(travel,t)
    return travel
  }

  override createTravelAsync(t: Travel): Promise<string> {
    throw new Error('Method not implemented.');
  }

  constructor() {
    super();
  }
}

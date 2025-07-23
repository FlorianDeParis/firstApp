import { Travel } from './../models/travel';

// Cette classe nme sert d'injection Token
// pour obtenir des instances de classes avec des méthodes définies
// pas d'implémentation, juste des déclarations de méthode
// interface non utilisable en ts car non existant en js

export abstract class DataService {

  // Dans la mesure où les données peuvent être obtenues par requête HTTP sur une API
  // Méthode asynchrone
  abstract getTravelsAsync(search:string): Promise<Travel[]>;
  abstract getTravelAsync(id:string): Promise<Travel>;

  abstract updateTravelAsync(id:string,t:Travel): Promise<Travel>;

  abstract createTravelAsync(t:Travel): Promise<string>;
}

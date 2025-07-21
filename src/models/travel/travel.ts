import { Travel } from "../travel";

export interface TravelWithMarge extends Travel{
  prixAvecMarge?:number,
  style?: object
}

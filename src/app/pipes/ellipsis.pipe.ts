import { inject, Inject, InjectionToken, Pipe, PipeTransform } from '@angular/core';

// Pour definir l'information nbCharMax de façon souple (faiblement couplée) et globale
// utiliser l'injection de dépendance
// id de dépendance => valeur définie par config


// Injection token = Id donné à une dépendance
export const EllipsisPipeMaxCharacters =new InjectionToken("EllipsisPipeMaxCharacters");

@Pipe({
  name: 'ellipsis'
})
export class EllipsisPipe implements PipeTransform {

  // Obtention d'une dépendance dans le constructeur
  // constructor(@Inject(EllipsisPipeMaxCharacters) private defaultNbCharMaxValue:number){

  // }

  // Autre façon d'obtenir une dépendance
  defaultNbCharMaxValue = inject(EllipsisPipeMaxCharacters) as number;

  transform(value: string, nbCharMax?:number): string {

    // Soit nbCharMax est fourni dans le template => sa valeur est utilisée
    // sinon, on prend la valeur deonnée par l'injection de dépendance
    if(!nbCharMax){
      nbCharMax = this.defaultNbCharMaxValue;
    }
    if(value.length <= nbCharMax){
      return value;
    }

    // Je tronque la chaine et ajoute ...
    return value.substring(0, nbCharMax-3)+"...";
  }

}

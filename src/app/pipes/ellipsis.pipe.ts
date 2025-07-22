import { InjectionToken, Pipe, PipeTransform } from '@angular/core';

// Pour definir l'information nbCharMax de façon souple (faiblement couplée) et globale
// utiliser l'injection de dépendance
// id de dépendance => valeur définie par config


// Injection token = Id donné à une dépendance
export const EllipsisPipeMaxCharacters =new InjectionToken("EllipsisPipeMaxCharacters");

@Pipe({
  name: 'ellipsis'
})
export class EllipsisPipe implements PipeTransform {

  transform(value: string, nbCharMax:number=10): string {
    if(value.length <= nbCharMax){
      return value;
    }
  }

}

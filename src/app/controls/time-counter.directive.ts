import { Directive, ElementRef, HostListener, inject, OnInit } from '@angular/core';

@Directive({
  selector: '[TimeCounter]',
  standalone: false
})
export class TimeCounterDirective implements OnInit{

  constructor() { }

    dateEntree?:number;
    cumul = 0;

    ngOnInit(): void {
      // Ajout d'un évènemenet par JS classique
      this.element.addEventListener("mouseenter", () => {
        console.log("Entree");
        this.dateEntree = Date.now();
      });
    }

    // Association de l'évènement mouseleave de l'élément avec la fonction
    @HostListener("mouseleave")
    sortie(){
      this.cumul += (Date.now() - this.dateEntree!);
      this.dateEntree = undefined;
      console.log("Sortie : " + this.cumul);
    }

    // Obtention de l'élément sur lequel l'attribut (la directive) est appliqué
    element = inject(ElementRef).nativeElement as HTMLElement;
}

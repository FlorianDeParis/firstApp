import { Directive, ElementRef, HostBinding, HostListener, inject, OnInit } from '@angular/core';

@Directive({
  selector: '[TimeCounter]',
  // cette directive sera accessible dans le template #tc="timeCounter"
  exportAs: 'timeCounter',
  standalone: false
})
export class TimeCounterDirective implements OnInit{

  constructor() { }

  @HostBinding("class.mouse-in")
  get isMouseIn(){
    return this.dateEntree!=undefined;
  }

  dateEntree?:number;
  cumul = 0;

  reset(): void {
    this.cumul = 0;
  }

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

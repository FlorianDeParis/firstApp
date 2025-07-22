import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'firstapp-number-editor',
  standalone: false,
  templateUrl: './number-editor.component.html',
  styleUrl: './number-editor.component.scss'
})
export class NumberEditorComponent {
  @Input()
  value=0;

  @Input()
  min?: number = undefined;

  @Input()
  max?: number = undefined;

  // Ajoute à ce component un evenement 'valueModified'
  @Output()
  valueModified = new EventEmitter<number>();

  canIncrement(n: number) {
    return !((this.min != undefined && this.value + n < this.min) || (this.max != undefined && this.value + n > this.max))
  }

  increment(n: number) {
    if (this.canIncrement(n)) {
      this.value += n;
      // Changement de value => déclenchemenet de l'évènement valueModified
      // $event => this.value
      this.valueModified.emit(this.value);
    }
  }
}

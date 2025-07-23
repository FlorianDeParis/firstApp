import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumberEditorComponent } from './number-editor/number-editor.component';
import { TimeCounterDirective } from './time-counter.directive';
import { TwoColsComponent } from './two-cols/two-cols.component';
import { ValidationComponent } from './validation/validation.component';



@NgModule({
  // Liste des éléments faisant partie de ce module
  // Ils se reconnaissent les uns des les autres
  declarations: [
    NumberEditorComponent,
    TimeCounterDirective,
    TwoColsComponent,
    ValidationComponent
  ],
  // Imports provenant de l'extérieur
  imports: [],
  // exports: Liste des éléments qui vont être disponibles par import du module
  exports: [NumberEditorComponent, TimeCounterDirective, TwoColsComponent, ValidationComponent]
})
export class ControlsModule {


}

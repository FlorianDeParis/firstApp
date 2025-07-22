import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumberEditorComponent } from './number-editor/number-editor.component';



@NgModule({
  // Liste des éléments faisant partie de ce module
  // Ils se reconnaissent les uns des les autres
  declarations: [
    NumberEditorComponent
  ],
  // Imports provenant de l'extérieur
  imports: [],
  // exports: Liste des éléments qui vont être disponibles par import du module
  exports: [NumberEditorComponent]
})
export class ControlsModule {


}

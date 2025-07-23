import { Component, computed, effect, inject, Injector, OnInit, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../../../../services/data-service';
import { Travel } from '../../../../models/travel';
import { FormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { ControlsModule } from "../../../controls/controls.module";

@Component({
  selector: 'firstapp-page-travel-edit',
  imports: [FormsModule, ControlsModule],
  templateUrl: './page-travel-edit.component.html',
  styleUrl: './page-travel-edit.component.scss'
})
export class PageTravelEditComponent implements OnInit{
  ngOnInit(): void {
    // Analyser la route
    // this.activatedRoute.params est un observable lié aux changemnts des paramètres de la route
    // /travel/list/1 => /travel/list/2 alors la méthode est éxécutée
    this.activatedRoute.params.subscribe( async params => {
      let id = params["id"];
      let travel = await this.dataService.getTravelAsync(id);

      // Changer la valeur contenue dans travelSignal
      // et indirectement maj l'UI
      this.travelSignal.set(travel);
    });
  }

  // Objet me permettant d'avoir les infos de la route
  activatedRoute = inject(ActivatedRoute);
  dataService = inject(DataService)
  injector=inject(Injector);

  // Valeur de travel => mise à jour dans l'UI seulement avec zone .js
  travel?:Travel;


  // Sans compter sur zone.js
  // Signal => objet qui contient une valeur de type Traval | undefined
  travelSignal = signal<Travel|undefined>(undefined);


  // effect => va éxécuter la fonction si les signaux utilisés dans la fonction change la valeur
  logChangementTravel = effect(() => {
    console.log(this.travelSignal());
  })

  // Nouveau signal avec une valeur qui évolue en fonction de travelSignal
  prixSignal = computed(() => this.travelSignal()?.prix);


  async validate(){
    try {
      await this.dataService.updateTravelAsync(this.travelSignal()!.id, this.travelSignal()!);
      let router = this.injector.get(Router);
      router.navigateByUrl('/travel/list');
    } catch (error) {

    }
  }
}

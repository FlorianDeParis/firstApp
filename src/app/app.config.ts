import { ApplicationConfig, DEFAULT_CURRENCY_CODE, LOCALE_ID, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withHashLocation } from '@angular/router';

import { routes } from './app.routes';
import { EllipsisPipeMaxCharacters } from './pipes/ellipsis.pipe';
import { registerLocaleData } from '@angular/common';

// Import des informations de locationsation françaises
import locale_fr from "@angular/common/locales/fr";
import { DataService } from '../services/data-service';
import { DataRamService } from '../services/data-ram.service';
import { TravelItemLinkUrl } from './travel/travel-list-item/travel-list-item.component';

// Ajoute les "locales" que je vais utiliser dans mon appli
registerLocaleData(locale_fr,"fr-FR")

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, withHashLocation()),
    // Association entre demande pour DataService
    // et création d'une instance de DataRamService
    { provide: DataService, useClass: DataRamService },
    { provide: LOCALE_ID, useValue: "fr-FR"},
    { provide: DEFAULT_CURRENCY_CODE, useValue: "EUR"},
    { provide: TravelItemLinkUrl, useValue: (id:string) => "/travel/details/"+id},
    // Dézpendance définie par value => valeur fixe définie au moment du démarrage
    // { provide: EllipsisPipeMaxCharacters, useValue:new Date().getMinutes() % 2 === 0 ? 10:20}

    // Dézpendance définie par value => Fonction exécutée pour obtenir la valeur lors de la première demande
    // { provide: EllipsisPipeMaxCharacters, useValue:() => new Date().getMinutes() % 2 === 0 ? 10:20}

    // Dézpendance définie par factory recalculée à chaque demande
    { provide: EllipsisPipeMaxCharacters, useFactory: () => new Date().getMinutes() % 2 === 0 ? 10:20}
  ]
};

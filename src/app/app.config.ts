import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { EllipsisPipeMaxCharacters } from './pipes/ellipsis.pipe';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    // Dézpendance définie par value => valeur fixe définie au moment du démarrage
    // { provide: EllipsisPipeMaxCharacters, useValue:new Date().getMinutes() % 2 === 0 ? 10:20}

    // Dézpendance définie par value => Fonction exécutée pour obtenir la valeur lors de la première demande
    // { provide: EllipsisPipeMaxCharacters, useValue:() => new Date().getMinutes() % 2 === 0 ? 10:20}

    // Dézpendance définie par factory recalculée à chaque demande
    { provide: EllipsisPipeMaxCharacters, useFactory: () => new Date().getMinutes() % 2 === 0 ? 10:20}
  ]
};

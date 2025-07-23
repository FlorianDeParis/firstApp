import { PageTravelEditComponent } from './pages/travel/page-travel-edit/page-travel-edit.component';
import { Routes } from '@angular/router';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { PageTravelListComponent } from './pages/travel/page-travel-list/page-travel-list.component';
import { PageTravelDetailsComponent } from './pages/travel/page-travel-details/page-travel-details.component';

export const routes: Routes = [
  {path: "", redirectTo: "accueil" , pathMatch: "full"},
  {path: "accueil", component: AccueilComponent},
  {path: "travel/list", component: PageTravelListComponent},
  {path: "travel/details/:id", component: PageTravelDetailsComponent},
  {path: "travel/edit/:id", component: PageTravelEditComponent},
  {path: "**", redirectTo:""}
];

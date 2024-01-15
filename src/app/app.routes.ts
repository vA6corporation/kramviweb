import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PlansComponent } from './plans/plans.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'prices', component: PlansComponent }
];

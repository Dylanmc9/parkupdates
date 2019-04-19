import { Routes } from '@angular/router';
import { WeatherComponent } from './weather/weather.component';
import { LandingComponent } from './landing/landing.component';

export const AppRoutes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'weather', component: WeatherComponent }
];
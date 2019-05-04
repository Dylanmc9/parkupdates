import { Routes } from '@angular/router';
import { WeatherComponent } from './weather/weather.component';
import { LandingComponent } from './landing/landing.component';
import { NewsComponent } from './news/news.component';
import { LocationComponent } from './location/location.component';
import { ParkmapComponent } from './parkmap/parkmap.component';
import { HomeComponent } from './home/home.component';


export const AppRoutes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'weather', component: WeatherComponent },
  { path: 'news', component: NewsComponent },
  { path: 'location', component: LocationComponent },
  { path: 'parks', component: ParkmapComponent  },
  { path: 'home', component: HomeComponent  }
];
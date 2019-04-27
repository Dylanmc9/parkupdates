import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app/app.component';
import { WeatherComponent } from './weather/weather.component';
import { RouterModule } from '@angular/router';
import { AppRoutes } from './routes';
import { LandingComponent } from './landing/landing.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { WeatherService } from "./weather.service";
import { NewsComponent } from './news/news.component';
import { SwapLanguageComponent } from './swap-language/swap-language.component';
import {TranslateModule} from '@ngx-translate/core';
import {TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { SpinnerLoadComponent } from './spinner-load/spinner-load.component';
import { LocationComponent } from './location/location.component';

export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}

const translateModule = TranslateModule.forRoot({loader: {
  provide   : TranslateLoader,
  useFactory: HttpLoaderFactory,
  deps      : [HttpClient]
}});

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    LandingComponent,
    NewsComponent,
    SwapLanguageComponent,
    SpinnerLoadComponent,
    LocationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppRoutingModule,
    RouterModule.forRoot(AppRoutes),
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    HttpClientModule,
    translateModule
  ],
  providers: [
    WeatherService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

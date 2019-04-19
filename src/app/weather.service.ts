import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) {}

  getWeather(location){
    return this.http.get(
        'https://api.apixu.com/v1/current.json?key=d8a1a3165e6346029f5151300190304&q=' + location
    );
}
}
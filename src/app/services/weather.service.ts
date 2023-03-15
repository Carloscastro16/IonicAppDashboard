import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  uri: string = '';
  constructor(
    public http: HttpClient
    ){
      this.uri = 'https://api.openweathermap.org/data/2.5/weather?q=Cancun&units=metric&lang=es&appid=b91fe7d356210fc0fc1e02747a05c159';
    }

    getWeather(){
      return this.http.get(this.uri);
    }
}

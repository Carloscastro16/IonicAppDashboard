import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { WeatherResponse } from '../interfaces/weather';
import { ForecastResponse } from '../interfaces/forecast';
import { Observable } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';


const apiKey = environment.apiKey;
const url = environment.owUrl;

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http:HttpClient) { 

  }

  getWeather(location:string) {
    var headers = new HttpHeaders({
      'Accept': 'application/json',
      'origin': 'localhost:8100'
    });
    console.log("WEATHER.SERVICE - getWeather "+location);
    return this.http.get<WeatherResponse>(`${ url }/weather?q=${ location }&appid=${ apiKey }&lang=es&units=metric`);
  }

  get5DaysWeather(location:string) {
    return this.http.get<ForecastResponse>(`${ url }/forecast?q=${ location }&appid=${ apiKey }&lang=es&units=metric`)
  }
}
import { Component, OnInit, Input } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';
import { WeatherResponse } from 'src/app/interfaces/weather';
import { Subject } from 'rxjs';
import { AuthenticationService } from '../services/auth.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-clima',
  templateUrl: './clima.page.html',
  styleUrls: ['./clima.page.scss',  '../app.component.scss'],
})
export class ClimaPage implements OnInit {

  localizacion = 'Cancún, MX';
  @Input() actualizarPrediccion: Subject<boolean> = new Subject<boolean>();
  tiempo!:WeatherResponse;
  imagen_resumen!:string;
  ahora:Date = new Date();
  constructor(
    private weatherService:WeatherService,
    public authService: AuthenticationService
    ) {

  }
  
  ngOnInit(): void {
    console.debug('Estamos en On Init de Weather component');
    this.cargarPrediccion();

    this.actualizarPrediccion.subscribe(response => {
      console.log("Holi!");
      this.cargarPrediccion();
    });
  }

    private handleError(error: any) { 
      let errMsg = (error.message) ? error.message : error.status ? `${error.status} - ${error.statusText}` : 'Server error';
      console.error(errMsg);
    }
  
    private cargarPrediccion(){
      this.weatherService.getWeather(this.localizacion).subscribe( resp => {
        console.debug('Parece que recibo algo en el on Init de TAB1');
        this.ahora = new Date();
        this.tiempo = resp;
        this.imagen_resumen = `https://openweathermap.org/img/wn/${this.tiempo.weather[0].icon}@2x.png`;
        console.log(resp);
      },
      err => {
        this.handleError(err);
      });
    }
}

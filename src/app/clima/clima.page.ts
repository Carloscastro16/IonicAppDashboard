import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-clima',
  templateUrl: './clima.page.html',
  styleUrls: ['./clima.page.scss', '../app.component.scss'],
})
export class ClimaPage implements OnInit {
  weather:any;
  descript: string = "";
  imagenId!: any;
  iconId!: any;
  
  urlImagen: string = "";
  urlIcon: string = "";
  date = new Date;
  day = this.date.getDate();
  month = this.date.getMonth()+1;
  dia = this.date.getDay();
  dias = [
  'Domingo',
  'Lunes',
  'Martes',
  'Miércoles',
  'Jueves',
  'Viernes',
  'Sábado',
  ];
  monthD = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre"
  ];
  nombreDia = this.dias[this.dia];
  nomMonth = this.monthD[this.month];
  constructor(private wService: WeatherService) {
    this.imagenId = {
      //Imagen cuando haya tormenta 
      Thunderstorm: "https://acortar.link/qTRy3e",
      
      //Imagen cuando haya drizzle
      Drizzle: "https://acortar.link/tI5NqB",
      
      //Imagen cuando hayan lluvias 
      Rain: "https://acortar.link/h7DBSV",
      
      //Imagen cuando haya nieve
      Snow: "https://acortar.link/pKJqjg",
      
      //Imagen cuando haya sol
      Clear: "https://thumbs.dreamstime.com/b/imagen-vertical-del-sol-en-cielo-azul-con-rayos-de-y-nubes-el-d%C3%ADa-214358350.jpg",
      
      //imagen para sucesos especiales
      Mist: "https://acortar.link/03hEpm",
      Smoke:"https://acortar.link/pdoXrD",
      Haze:"https://cdn.pixabay.com/photo/2016/07/22/16/29/fog-1535201_960_720.jpg?auto=compress&cs=tinysrgb&dpr=2",
      Dust:"https://cdn.pixabay.com/photo/2016/07/22/16/29/fog-1535201_960_720.jpg?auto=compress&cs=tinysrgb&dpr=2",
      Fog:"https://cdn.pixabay.com/photo/2016/07/22/16/29/fog-1535201_960_720.jpg?auto=compress&cs=tinysrgb&dpr=2",
      Sand:"https://cdn.pixabay.com/photo/2016/07/22/16/29/fog-1535201_960_720.jpg?auto=compress&cs=tinysrgb&dpr=2",
      Ash:"https://cdn.pixabay.com/photo/2016/07/22/16/29/fog-1535201_960_720.jpg?auto=compress&cs=tinysrgb&dpr=2",
      Squall:"https://cdn.pixabay.com/photo/2016/07/22/16/29/fog-1535201_960_720.jpg?auto=compress&cs=tinysrgb&dpr=2",
      Tornado:"https://cdn.pixabay.com/photo/2016/07/22/16/29/fog-1535201_960_720.jpg?auto=compress&cs=tinysrgb&dpr=2",
  
      //Imagen cuando haya nubes
      Clouds: "https://acortar.link/cENM85"
      
    }
    this.iconId = {
      //Imagen cuando haya tormenta 
      Thunderstorm: "thunderstorm-outline",
      
      //Imagen cuando haya drizzle
      Drizzle: "partly-sunny-outline",
      
      //Imagen cuando hayan lluvias 
      Rain: "rainy-outline",
      
      //Imagen cuando haya nieve
      Snow: "rainy-outline",
      
      //Imagen cuando haya sol
      Clear: "sunny-outline",
      
      //imagen para sucesos especiales
      Mist:"cloud_outline",
      Smoke:"cloud_outline",
      Haze:"cloud_outline",
      Dust:"cloud_outline",
      Fog:"cloud_outline",
      Sand:"cloud_outline",
      Ash:"cloud_outline",
      Squall:"cloud_outline",
      Tornado:"cloud_outline",
  
      //Imagen cuando haya nubes
      Clouds: "cloudy-outline"
      
    }
  }

  ngOnInit() {
    this.wService.getWeather()
      .subscribe(
        res=>{
          console.log(res)
          this.weather = res
          this.urlImagen = this.imagenId[this.weather.weather[0].main] 
          this.urlIcon = this.iconId[this.weather.weather[0].main] 
          this.descript = this.weather.weather[0].description.charAt(0).toUpperCase() + this.weather.weather[0].description.slice(1)
        },
        err=> console.log(err)
        )
  }
  
}

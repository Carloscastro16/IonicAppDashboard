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
  constructor(private wService: WeatherService) {
    this.imagenId = {
      //Imagen cuando haya tormenta 
      Thunderstorm: "https://cdn.pixabay.com/photo/2018/05/30/15/39/thunderstorm-3441687_960_720.jpg?auto=compress&cs=tinysrgb&dpr=2",
      
      //Imagen cuando haya drizzle
      Drizzle: "https://cdn.pixabay.com/photo/2019/06/30/16/07/plant-4308306_960_720.jpg?auto=compress&cs=tinysrgb&dpr=2",
      
      //Imagen cuando hayan lluvias 
      Rain: "https://cdn.pixabay.com/photo/2017/08/18/13/04/glass-2654887_960_720.jpg?auto=compress&cs=tinysrgb&dpr=2",
      
      //Imagen cuando haya nieve
      Snow: "https://cdn.pixabay.com/photo/2013/10/27/17/14/snowfall-201496_960_720.jpg?auto=compress&cs=tinysrgb&dpr=2",
      
      //Imagen cuando haya sol
      Clear: "https://cdn.pixabay.com/photo/2013/08/20/15/47/poppies-174276_960_720.jpg?auto=compress&cs=tinysrgb&dpr=2",
      
      //imagen para sucesos especiales
      Mist: "https://cdn.pixabay.com/photo/2016/07/22/16/29/fog-1535201_960_720.jpg?auto=compress&cs=tinysrgb&dpr=2",
      Smoke:"https://cdn.pixabay.com/photo/2016/07/22/16/29/fog-1535201_960_720.jpg?auto=compress&cs=tinysrgb&dpr=2",
      Haze:"https://cdn.pixabay.com/photo/2016/07/22/16/29/fog-1535201_960_720.jpg?auto=compress&cs=tinysrgb&dpr=2",
      Dust:"https://cdn.pixabay.com/photo/2016/07/22/16/29/fog-1535201_960_720.jpg?auto=compress&cs=tinysrgb&dpr=2",
      Fog:"https://cdn.pixabay.com/photo/2016/07/22/16/29/fog-1535201_960_720.jpg?auto=compress&cs=tinysrgb&dpr=2",
      Sand:"https://cdn.pixabay.com/photo/2016/07/22/16/29/fog-1535201_960_720.jpg?auto=compress&cs=tinysrgb&dpr=2",
      Ash:"https://cdn.pixabay.com/photo/2016/07/22/16/29/fog-1535201_960_720.jpg?auto=compress&cs=tinysrgb&dpr=2",
      Squall:"https://cdn.pixabay.com/photo/2016/07/22/16/29/fog-1535201_960_720.jpg?auto=compress&cs=tinysrgb&dpr=2",
      Tornado:"https://cdn.pixabay.com/photo/2016/07/22/16/29/fog-1535201_960_720.jpg?auto=compress&cs=tinysrgb&dpr=2",
  
      //Imagen cuando haya nubes
      Clouds: "https://cdn.pixabay.com/photo/2020/07/04/06/41/clouds-5368444_960_720.jpg?auto=compress&cs=tinysrgb&dpr=2"
      
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

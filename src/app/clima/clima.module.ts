import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClimaPageRoutingModule } from './clima-routing.module';

import { ClimaPage } from './clima.page';
import { ComponentsModule } from '../components/components.module';
import { HttpClientModule } from '@angular/common/http';
import { WeatherService } from '../services/weather.service';

@NgModule({
  imports: [
    ComponentsModule,
    CommonModule,
    FormsModule,
    IonicModule,
    ClimaPageRoutingModule,
    HttpClientModule
  ],
  declarations: [ClimaPage],
  exports: [ClimaPage],
  providers: [WeatherService]
})
export class ClimaPageModule {}

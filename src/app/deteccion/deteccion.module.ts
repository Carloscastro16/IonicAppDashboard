import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeteccionPageRoutingModule } from './deteccion-routing.module';

import { DeteccionPage } from './deteccion.page';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  imports: [
    ComponentsModule,
    CommonModule,
    FormsModule,
    IonicModule,
    DeteccionPageRoutingModule
  ],
  declarations: [DeteccionPage]
})
export class DeteccionPageModule {}

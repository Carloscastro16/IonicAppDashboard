import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PajarosPageRoutingModule } from './pajaros-routing.module';

import { PajarosPage } from './pajaros.page';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  imports: [
    ComponentsModule,
    CommonModule,
    FormsModule,
    IonicModule,
    PajarosPageRoutingModule
  ],
  declarations: [PajarosPage]
})
export class PajarosPageModule {}

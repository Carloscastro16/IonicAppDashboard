import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IguanasPageRoutingModule } from './iguanas-routing.module';

import { IguanasPage } from './iguanas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IguanasPageRoutingModule
  ],
  declarations: [IguanasPage]
})
export class IguanasPageModule {}

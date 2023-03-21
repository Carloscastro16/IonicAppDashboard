import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArdillasPageRoutingModule } from './ardillas-routing.module';

import { ArdillasPage } from './ardillas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArdillasPageRoutingModule
  ],
  declarations: [ArdillasPage]
})
export class ArdillasPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ForgorPasswordPageRoutingModule } from './forgor-password-routing.module';

import { ForgorPasswordPage } from './forgor-password.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ForgorPasswordPageRoutingModule
  ],
  declarations: [ForgorPasswordPage]
})
export class ForgorPasswordPageModule {}

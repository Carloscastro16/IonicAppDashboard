import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CoatiesPageRoutingModule } from './coaties-routing.module';

import { CoatiesPage } from './coaties.page';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  imports: [
    ComponentsModule,
    CommonModule,
    FormsModule,
    IonicModule,
    CoatiesPageRoutingModule
  ],
  declarations: [CoatiesPage]
})
export class CoatiesPageModule {}

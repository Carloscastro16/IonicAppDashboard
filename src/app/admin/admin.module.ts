import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { IonicModule } from '@ionic/angular';

import { AdminPageRoutingModule } from './admin-routing.module';

import { AdminPage } from './admin.page';
import { ComponentsModule } from '../components/components.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    ComponentsModule,
    CommonModule,
    FormsModule,
    IonicModule,
    AdminPageRoutingModule,
    HttpClientModule
  ],
  declarations: [
    AdminPage
  ]
})
export class AdminPageModule {}

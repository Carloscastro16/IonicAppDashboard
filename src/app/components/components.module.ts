import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { DatosZonaComponent } from './datos-zona/datos-zona.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    NavbarComponent,
    DatosZonaComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    CommonModule,
    RouterModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  exports: [
    NavbarComponent,
    DatosZonaComponent
  ]
})
export class ComponentsModule { }

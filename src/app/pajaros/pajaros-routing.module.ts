import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PajarosPage } from './pajaros.page';

const routes: Routes = [
  {
    path: '',
    component: PajarosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PajarosPageRoutingModule {}

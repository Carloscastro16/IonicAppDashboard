import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArdillasPage } from './ardillas.page';

const routes: Routes = [
  {
    path: '',
    component: ArdillasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArdillasPageRoutingModule {}

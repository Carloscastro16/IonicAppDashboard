import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoatiesPage } from './coaties.page';

const routes: Routes = [
  {
    path: '',
    component: CoatiesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoatiesPageRoutingModule {}

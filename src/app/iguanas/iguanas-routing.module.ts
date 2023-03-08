import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IguanasPage } from './iguanas.page';

const routes: Routes = [
  {
    path: '',
    component: IguanasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IguanasPageRoutingModule {}

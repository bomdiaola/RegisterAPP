import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CodigoQrPage } from './codigo-qr.page';

const routes: Routes = [
  {
    path: '',
    component: CodigoQrPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CodigoQrPageRoutingModule {}

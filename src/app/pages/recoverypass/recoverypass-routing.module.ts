import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecoverypassPage } from './recoverypass.page';

const routes: Routes = [
  {
    path: '',
    component: RecoverypassPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecoverypassPageRoutingModule {}

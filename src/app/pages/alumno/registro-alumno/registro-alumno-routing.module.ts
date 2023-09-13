import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistroAlumnoPage } from './registro-alumno.page';

const routes: Routes = [
  {
    path: '',
    component: RegistroAlumnoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistroAlumnoPageRoutingModule {}

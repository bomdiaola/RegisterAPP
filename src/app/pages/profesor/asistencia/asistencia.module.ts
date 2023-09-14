import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AsistenciaPageRoutingModule } from './asistencia-routing.module';

import { AsistenciaPage } from './asistencia.page';


import { ModuloModule } from 'src/app/modulos/modulo/modulo.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AsistenciaPageRoutingModule,
    ModuloModule
  ],
  declarations: [AsistenciaPage]
})
export class AsistenciaPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistroAlumnoPageRoutingModule } from './registro-alumno-routing.module';

import { RegistroAlumnoPage } from './registro-alumno.page';

import { NgxScannerQrcodeModule, LOAD_WASM } from 'ngx-scanner-qrcode';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistroAlumnoPageRoutingModule,
    NgxScannerQrcodeModule
  ],
  declarations: [RegistroAlumnoPage]
})
export class RegistroAlumnoPageModule {}

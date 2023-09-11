import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecoverypassPageRoutingModule } from './recoverypass-routing.module';

import { RecoverypassPage } from './recoverypass.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecoverypassPageRoutingModule
  ],
  declarations: [RecoverypassPage]
})
export class RecoverypassPageModule {}
